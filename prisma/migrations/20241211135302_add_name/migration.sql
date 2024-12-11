/*
  Warnings:

  - Added the required column `name` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Promotor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Promotor" ADD COLUMN     "name" TEXT NOT NULL;
