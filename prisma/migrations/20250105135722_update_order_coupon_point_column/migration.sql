/*
  Warnings:

  - You are about to drop the column `coupon_id` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `points_used` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "coupon_id",
DROP COLUMN "points_used",
ADD COLUMN     "coupon" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "point" INTEGER;
