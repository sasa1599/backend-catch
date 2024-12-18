/*
  Warnings:

  - You are about to drop the column `is_redeem` on the `UserPoint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserPoint" DROP COLUMN "is_redeem",
ADD COLUMN     "is_transaction" BOOLEAN NOT NULL DEFAULT false;
