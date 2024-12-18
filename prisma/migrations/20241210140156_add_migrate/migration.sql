/*
  Warnings:

  - You are about to drop the column `user_id` on the `UserPoint` table. All the data in the column will be lost.
  - Added the required column `customer_id` to the `UserPoint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPoint" DROP COLUMN "user_id",
ADD COLUMN     "customer_id" INTEGER NOT NULL;
