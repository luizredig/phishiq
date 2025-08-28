-- CreateEnum
CREATE TYPE "CanalTeste" AS ENUM ('EMAIL');

-- CreateEnum
CREATE TYPE "StatusCampanha" AS ENUM ('INICIADA', 'EM_ANDAMENTO', 'FINALIZADA');

-- CreateEnum
CREATE TYPE "StatusTeste" AS ENUM ('ENVIADO', 'FALHA');

-- CreateEnum
CREATE TYPE "TipoLog" AS ENUM ('LOGIN', 'CRIACAO', 'ATUALIZACAO', 'DELECAO', 'TESTE_ENVIADO', 'TESTE_CLICADO', 'OUTRO');

-- CreateEnum
CREATE TYPE "CargoUsuario" AS ENUM ('ADMIN', 'FUNCIONARIO');

-- CreateTable
CREATE TABLE "Campanha" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "status" "StatusCampanha" NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "atualizadoPor" TEXT,
    "inativadoEm" TIMESTAMP(3),
    "inativadoPor" TEXT,

    CONSTRAINT "Campanha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampanhaTeste" (
    "id" TEXT NOT NULL,
    "campanhaId" TEXT NOT NULL,
    "testeId" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "atualizadoPor" TEXT,
    "inativadoEm" TIMESTAMP(3),
    "inativadoPor" TEXT,

    CONSTRAINT "CampanhaTeste_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Departamento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "atualizadoPor" TEXT,
    "inativadoEm" TIMESTAMP(3),
    "inativadoPor" TEXT,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "tipo" "TipoLog" NOT NULL,
    "descricao" TEXT,
    "campanhaId" TEXT,
    "departamentoId" TEXT,
    "testeId" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "atualizadoPor" TEXT,
    "inativadoEm" TIMESTAMP(3),
    "inativadoPor" TEXT,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teste" (
    "id" TEXT NOT NULL,
    "canal" "CanalTeste" NOT NULL,
    "status" "StatusTeste" NOT NULL,
    "caiuNoTeste" BOOLEAN NOT NULL DEFAULT false,
    "reportouPhishing" BOOLEAN NOT NULL DEFAULT false,
    "usuarioId" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "atualizadoPor" TEXT,
    "inativadoEm" TIMESTAMP(3),
    "inativadoPor" TEXT,

    CONSTRAINT "Teste_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TesteDepartamento" (
    "id" TEXT NOT NULL,
    "testeId" TEXT NOT NULL,
    "departamentoId" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "atualizadoPor" TEXT,
    "inativadoEm" TIMESTAMP(3),
    "inativadoPor" TEXT,

    CONSTRAINT "TesteDepartamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT,
    "email" TEXT NOT NULL,
    "cargo" "CargoUsuario" NOT NULL DEFAULT 'FUNCIONARIO',
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "atualizadoPor" TEXT,
    "inativadoEm" TIMESTAMP(3),
    "inativadoPor" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioDepartamento" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "departamentoId" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "atualizadoPor" TEXT,
    "inativadoEm" TIMESTAMP(3),
    "inativadoPor" TEXT,

    CONSTRAINT "UsuarioDepartamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CampanhaTeste_campanhaId_testeId_key" ON "CampanhaTeste"("campanhaId", "testeId");

-- CreateIndex
CREATE UNIQUE INDEX "TesteDepartamento_testeId_departamentoId_key" ON "TesteDepartamento"("testeId", "departamentoId");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioDepartamento_usuarioId_departamentoId_key" ON "UsuarioDepartamento"("usuarioId", "departamentoId");

-- AddForeignKey
ALTER TABLE "CampanhaTeste" ADD CONSTRAINT "CampanhaTeste_campanhaId_fkey" FOREIGN KEY ("campanhaId") REFERENCES "Campanha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampanhaTeste" ADD CONSTRAINT "CampanhaTeste_testeId_fkey" FOREIGN KEY ("testeId") REFERENCES "Teste"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_campanhaId_fkey" FOREIGN KEY ("campanhaId") REFERENCES "Campanha"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "Departamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_testeId_fkey" FOREIGN KEY ("testeId") REFERENCES "Teste"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teste" ADD CONSTRAINT "Teste_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TesteDepartamento" ADD CONSTRAINT "TesteDepartamento_testeId_fkey" FOREIGN KEY ("testeId") REFERENCES "Teste"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TesteDepartamento" ADD CONSTRAINT "TesteDepartamento_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "Departamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioDepartamento" ADD CONSTRAINT "UsuarioDepartamento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioDepartamento" ADD CONSTRAINT "UsuarioDepartamento_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "Departamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
