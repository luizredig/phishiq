-- CreateEnum
CREATE TYPE "CanalTeste" AS ENUM ('EMAIL', 'WHATSAPP');

-- CreateEnum
CREATE TYPE "StatusCampanha" AS ENUM ('INICIADA', 'EM_ANDAMENTO', 'FINALIZADA');

-- CreateEnum
CREATE TYPE "StatusTeste" AS ENUM ('ENVIADO', 'ABERTO', 'CLIQUE', 'SUCESSO', 'FALHA');

-- CreateEnum
CREATE TYPE "TipoLog" AS ENUM ('LOGIN', 'CRIACAO', 'ATUALIZACAO', 'DELECAO', 'TESTE_ENVIADO', 'TESTE_CLICADO', 'OUTRO');

-- CreateTable
CREATE TABLE "Campanha" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "status" "StatusCampanha" NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "editadoEm" TIMESTAMP(3) NOT NULL,
    "editadoPor" TEXT,
    "deletadoEm" TIMESTAMP(3),
    "deletadoPor" TEXT,

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
    "editadoEm" TIMESTAMP(3) NOT NULL,
    "editadoPor" TEXT,
    "deletadoEm" TIMESTAMP(3),
    "deletadoPor" TEXT,

    CONSTRAINT "CampanhaTeste_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Departamento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "editadoEm" TIMESTAMP(3) NOT NULL,
    "editadoPor" TEXT,
    "deletadoEm" TIMESTAMP(3),
    "deletadoPor" TEXT,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "tipo" "TipoLog" NOT NULL,
    "descricao" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "editadoEm" TIMESTAMP(3) NOT NULL,
    "editadoPor" TEXT,
    "deletadoEm" TIMESTAMP(3),
    "deletadoPor" TEXT,
    "campanhaId" TEXT,
    "departamentoId" TEXT,
    "testeId" TEXT,
    "tipoDeTesteId" TEXT,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teste" (
    "id" TEXT NOT NULL,
    "canal" "CanalTeste" NOT NULL,
    "status" "StatusTeste" NOT NULL,
    "caiuNoTeste" BOOLEAN NOT NULL DEFAULT false,
    "reportouPhishing" BOOLEAN NOT NULL DEFAULT false,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "editadoEm" TIMESTAMP(3) NOT NULL,
    "editadoPor" TEXT,
    "deletadoEm" TIMESTAMP(3),
    "deletadoPor" TEXT,

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
    "editadoEm" TIMESTAMP(3) NOT NULL,
    "editadoPor" TEXT,
    "deletadoEm" TIMESTAMP(3),
    "deletadoPor" TEXT,

    CONSTRAINT "TesteDepartamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoDeTeste" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoPor" TEXT,
    "editadoEm" TIMESTAMP(3) NOT NULL,
    "editadoPor" TEXT,
    "deletadoEm" TIMESTAMP(3),
    "deletadoPor" TEXT,

    CONSTRAINT "TipoDeTeste_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CampanhaToTipoDeTeste" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CampanhaToTipoDeTeste_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "CampanhaTeste_campanhaId_testeId_key" ON "CampanhaTeste"("campanhaId", "testeId");

-- CreateIndex
CREATE UNIQUE INDEX "TesteDepartamento_testeId_departamentoId_key" ON "TesteDepartamento"("testeId", "departamentoId");

-- CreateIndex
CREATE INDEX "_CampanhaToTipoDeTeste_B_index" ON "_CampanhaToTipoDeTeste"("B");

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
ALTER TABLE "Log" ADD CONSTRAINT "Log_tipoDeTesteId_fkey" FOREIGN KEY ("tipoDeTesteId") REFERENCES "TipoDeTeste"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TesteDepartamento" ADD CONSTRAINT "TesteDepartamento_testeId_fkey" FOREIGN KEY ("testeId") REFERENCES "Teste"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TesteDepartamento" ADD CONSTRAINT "TesteDepartamento_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "Departamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampanhaToTipoDeTeste" ADD CONSTRAINT "_CampanhaToTipoDeTeste_A_fkey" FOREIGN KEY ("A") REFERENCES "Campanha"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampanhaToTipoDeTeste" ADD CONSTRAINT "_CampanhaToTipoDeTeste_B_fkey" FOREIGN KEY ("B") REFERENCES "TipoDeTeste"("id") ON DELETE CASCADE ON UPDATE CASCADE;
