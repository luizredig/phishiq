-- CreateEnum
CREATE TYPE "Action" AS ENUM ('CREATE', 'READ', 'UPDATE', 'DELETE', 'OPEN', 'SEND', 'ERROR');

-- CreateEnum
CREATE TYPE "Entity" AS ENUM ('DEPARTMENT', 'ENUM', 'MODULE', 'PHISHING', 'PHISHING_DEPARTMENT', 'PHISHING_TEMPLATE', 'PSEUDONYM', 'TENANT', 'TENANT_MODULE', 'USER', 'USER_DEPARTMENT');

-- CreateEnum
CREATE TYPE "PhishingChannel" AS ENUM ('EMAIL');

-- CreateEnum
CREATE TYPE "PhishingStatus" AS ENUM ('SENT', 'CLICKED', 'SEND_FAILED');

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "inactivated_at" TIMESTAMP(3),
    "inactivated_by" TEXT,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "entity" "Entity" NOT NULL,
    "entity_id" TEXT NOT NULL,
    "action" "Action" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhishingDepartment" (
    "id" TEXT NOT NULL,
    "phishing_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "inactivated_at" TIMESTAMP(3),
    "inactivated_by" TEXT,

    CONSTRAINT "PhishingDepartment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phishing" (
    "id" TEXT NOT NULL,
    "clicked" BOOLEAN NOT NULL DEFAULT false,
    "reported" BOOLEAN NOT NULL DEFAULT false,
    "channel" "PhishingChannel" NOT NULL,
    "status" "PhishingStatus" NOT NULL,
    "userId" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "inactivated_at" TIMESTAMP(3),
    "inactivated_by" TEXT,

    CONSTRAINT "Phishing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDepartment" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "inactivated_at" TIMESTAMP(3),
    "inactivated_by" TEXT,

    CONSTRAINT "UserDepartment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "refresh_token_hash" TEXT,
    "last_login_at" TIMESTAMP(3),
    "roles" TEXT[],
    "tenant_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "inactivated_at" TIMESTAMP(3),
    "inactivated_by" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PhishingDepartment_phishing_id_department_id_key" ON "PhishingDepartment"("phishing_id", "department_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserDepartment_user_id_department_id_key" ON "UserDepartment"("user_id", "department_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "PhishingDepartment" ADD CONSTRAINT "PhishingDepartment_phishing_id_fkey" FOREIGN KEY ("phishing_id") REFERENCES "Phishing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhishingDepartment" ADD CONSTRAINT "PhishingDepartment_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phishing" ADD CONSTRAINT "Phishing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDepartment" ADD CONSTRAINT "UserDepartment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDepartment" ADD CONSTRAINT "UserDepartment_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
