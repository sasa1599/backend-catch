/*
  Warnings:

  - You are about to drop the column `invoice_url` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "invoice_url";
