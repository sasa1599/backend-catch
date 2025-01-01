/*
  Warnings:

  - You are about to alter the column `subPrice` on the `OrderDetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "status_order" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "OrderDetails" ALTER COLUMN "subPrice" SET DATA TYPE INTEGER;
