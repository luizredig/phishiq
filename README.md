## 📁 Estrutura de Pastas

├── backend/ → Nest.js <br>
├── frontend/ → Vite <br>
├── docker-compose.yml

---

## 🚀 Como rodar o ambiente localmente

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 🐳 Subindo os containers (Banco, Keycloak, etc.)

No diretório raiz do projeto, execute:

```bash
docker-compose up -d
```

Isso irá subir:

- Frontend - [http://localhost:1413](http://localhost:1413)

- Backend - [http://localhost:1421](http://localhost:1421)

- Keycloak - [http://localhost:8080](http://localhost:8080)

- PgAdmin - [http://localhost:8081](http://localhost:8081)

Acesse o container do backend:

```bash
docker exec -it phishiq-backend bash
```

Instalar dependências

```bash
npm install
```

Gerar prisma

```bash
npx prisma generate
```

Fazer push para os databases

```bash
npx prisma db push
```

Inicie o servidor em modo desenvolvimento:

```bash
npm run dev
```

A API estará disponível em: http://localhost:1421

## 🎨 Configuração do Frontend

Acesse o container do frontend:

```bash
docker exec -it phishiq-frontend bash
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

A interface estará disponível em: [http://localhost:1413](http://localhost:1413)

## 📌 Observações

Ajuste as variáveis de ambiente conforme necessário nos arquivos .env. Verifique os arquivos .env.example no backend e no frontend.
