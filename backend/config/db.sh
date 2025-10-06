#!/bin/bash
set -e

# -------------------------------
# Script de criação de tenant + usuário admin
# -------------------------------

# Pega o parâmetro --tenant=
for i in "$@"; do
  case $i in
    --tenant=*)
      TENANT="${i#*=}"
      shift
      ;;
    *)
      echo "Uso: $0 --tenant=<nome-do-tenant>"
      exit 1
      ;;
  esac
done

if [ -z "$TENANT" ]; then
  echo "Erro: Tenant não informado."
  exit 1
fi

# Slug para tabelas
TENANT_SLUG="$TENANT"

# Nome do DB usa underscore
TENANT_DB_SAFE=$(echo "$TENANT_SLUG" | tr '-' '_')
TENANT_DB="phishiq_tenant_${TENANT_DB_SAFE}"

DB_USER="admin"
DB_PASS="admin"
POSTGRES_CONTAINER="postgres16-phishiq"
BACKEND_CONTAINER="phishiq-backend"
MASTER_DB="phishiq_master"

# Função para executar SQL dentro do container do Postgres
run_psql() {
  local DB="$1"
  local SQL="$2"
  docker exec -i "$POSTGRES_CONTAINER" psql -U "$DB_USER" -d "$DB" -c "$SQL"
}

echo ">>> Criando Tenant [$TENANT_SLUG] no banco $MASTER_DB ..."

# Cria Tenant se não existir
run_psql "$MASTER_DB" "
CREATE EXTENSION IF NOT EXISTS \"pgcrypto\";

INSERT INTO \"Tenant\" (id, name, slug, created_by, updated_by, updated_at)
SELECT gen_random_uuid(), initcap('$TENANT_SLUG'), '$TENANT_SLUG', 'system', 'system', now()
WHERE NOT EXISTS (SELECT 1 FROM \"Tenant\" WHERE slug = '$TENANT_SLUG');
"

# Cria Module se não existir
run_psql "$MASTER_DB" "
INSERT INTO \"Module\" (id, name, slug, created_by, updated_by, updated_at)
SELECT gen_random_uuid(), 'Phishing por email', 'phishing-email', 'system', 'system', now()
WHERE NOT EXISTS (SELECT 1 FROM \"Module\" WHERE slug = 'phishing-email');
"

# Atribui Module ao Tenant se não existir
run_psql "$MASTER_DB" "
INSERT INTO \"TenantModule\" (id, tenant_id, module_id, created_by, updated_by, updated_at)
SELECT gen_random_uuid(), t.id, m.id, 'system', 'system', now()
FROM \"Tenant\" t, \"Module\" m
WHERE t.slug = '$TENANT_SLUG' AND m.slug = 'phishing-email'
AND NOT EXISTS (
  SELECT 1 FROM \"TenantModule\" tm WHERE tm.tenant_id = t.id AND tm.module_id = m.id
);
"

# Pega tenant_id do banco master
TENANT_ID=$(docker exec -i "$POSTGRES_CONTAINER" psql -U "$DB_USER" -d "$MASTER_DB" -t -c "SELECT id FROM \"Tenant\" WHERE slug = '$TENANT_SLUG';" | tr -d '[:space:]')

echo ">>> Garantindo que o banco $TENANT_DB existe ..."
docker exec -i "$POSTGRES_CONTAINER" psql -U "$DB_USER" -d postgres -tc "SELECT 1 FROM pg_database WHERE datname = '$TENANT_DB'" | grep -q 1 || \
  docker exec -i "$POSTGRES_CONTAINER" psql -U "$DB_USER" -d postgres -c "CREATE DATABASE \"$TENANT_DB\";"

echo ">>> Criando usuário admin no banco $TENANT_DB ..."
run_psql "$TENANT_DB" "
CREATE EXTENSION IF NOT EXISTS \"pgcrypto\";

INSERT INTO \"User\" (id, name, email, roles, tenant_id, created_by, created_at, updated_by, updated_at)
SELECT gen_random_uuid(), 'Administrador', 'admin@admin.com', '{admin}', '$TENANT_ID', '$TENANT_ID', now(), 'system', now()
WHERE NOT EXISTS (SELECT 1 FROM \"User\" u WHERE u.email = 'admin@admin.com');

"

echo ">>> Finalizado com sucesso!"
