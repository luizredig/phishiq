-- CreateEnum
CREATE TYPE "Action" AS ENUM ('CREATE', 'READ', 'UPDATE', 'DELETE', 'CLICKED', 'SEND', 'ERROR', 'LOGIN', 'SIGNUP');

-- CreateEnum
CREATE TYPE "CookieCategory" AS ENUM ('STRICTLY_NECESSARY', 'FUNCTIONAL', 'ANALYTICS', 'ADVERTISING');

-- CreateEnum
CREATE TYPE "Entity" AS ENUM ('DEPARTMENT', 'PHISHING', 'PHISHING_DEPARTMENT', 'PHISHING_TEMPLATE', 'PSEUDONYM', 'PSEUDONYM_COOKIE_CONSENT', 'PSEUDONYM_CHANNEL_CONSENT', 'USER', 'USER_DEPARTMENT', 'LOGIN', 'SIGNUP');

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
CREATE TABLE "PhishingTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "inactivated_at" TIMESTAMP(3),
    "inactivated_by" TEXT,

    CONSTRAINT "PhishingTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phishing" (
    "id" TEXT NOT NULL,
    "clicked" BOOLEAN NOT NULL DEFAULT false,
    "channel" "PhishingChannel" NOT NULL,
    "status" "PhishingStatus" NOT NULL,
    "pseudonymId" TEXT,
    "template_id" TEXT,
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
CREATE TABLE "PseudonymChannelConsent" (
    "id" TEXT NOT NULL,
    "pseudonym_id" TEXT NOT NULL,
    "channel" "PhishingChannel" NOT NULL,
    "consented" BOOLEAN NOT NULL,
    "consented_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "inactivated_at" TIMESTAMP(3),
    "inactivated_by" TEXT,

    CONSTRAINT "PseudonymChannelConsent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PseudonymCookieConsent" (
    "id" TEXT NOT NULL,
    "pseudonym_id" TEXT NOT NULL,
    "category" "CookieCategory" NOT NULL,
    "consented" BOOLEAN NOT NULL,
    "consented_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "inactivated_at" TIMESTAMP(3),
    "inactivated_by" TEXT,

    CONSTRAINT "PseudonymCookieConsent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PseudonymDepartment" (
    "id" TEXT NOT NULL,
    "pseudonym_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "inactivated_at" TIMESTAMP(3),
    "inactivated_by" TEXT,

    CONSTRAINT "PseudonymDepartment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pseudonym" (
    "id" TEXT NOT NULL,
    "pseudonym" TEXT NOT NULL,
    "user_id" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "inactivated_at" TIMESTAMP(3),
    "inactivated_by" TEXT,

    CONSTRAINT "Pseudonym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_search" TEXT,
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
CREATE UNIQUE INDEX "PseudonymChannelConsent_pseudonym_id_channel_key" ON "PseudonymChannelConsent"("pseudonym_id", "channel");

-- CreateIndex
CREATE UNIQUE INDEX "PseudonymCookieConsent_pseudonym_id_category_key" ON "PseudonymCookieConsent"("pseudonym_id", "category");

-- CreateIndex
CREATE UNIQUE INDEX "PseudonymDepartment_pseudonym_id_department_id_key" ON "PseudonymDepartment"("pseudonym_id", "department_id");

-- CreateIndex
CREATE UNIQUE INDEX "Pseudonym_pseudonym_key" ON "Pseudonym"("pseudonym");

-- CreateIndex
CREATE UNIQUE INDEX "Pseudonym_user_id_key" ON "Pseudonym"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_search_key" ON "User"("email_search");

-- AddForeignKey
ALTER TABLE "PhishingDepartment" ADD CONSTRAINT "PhishingDepartment_phishing_id_fkey" FOREIGN KEY ("phishing_id") REFERENCES "Phishing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhishingDepartment" ADD CONSTRAINT "PhishingDepartment_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phishing" ADD CONSTRAINT "Phishing_pseudonymId_fkey" FOREIGN KEY ("pseudonymId") REFERENCES "Pseudonym"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phishing" ADD CONSTRAINT "Phishing_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "PhishingTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PseudonymChannelConsent" ADD CONSTRAINT "PseudonymChannelConsent_pseudonym_id_fkey" FOREIGN KEY ("pseudonym_id") REFERENCES "Pseudonym"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PseudonymCookieConsent" ADD CONSTRAINT "PseudonymCookieConsent_pseudonym_id_fkey" FOREIGN KEY ("pseudonym_id") REFERENCES "Pseudonym"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PseudonymDepartment" ADD CONSTRAINT "PseudonymDepartment_pseudonym_id_fkey" FOREIGN KEY ("pseudonym_id") REFERENCES "Pseudonym"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PseudonymDepartment" ADD CONSTRAINT "PseudonymDepartment_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pseudonym" ADD CONSTRAINT "Pseudonym_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
