/*
  Warnings:

  - Changed the type of `rating` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "coupon_id" TEXT,
ADD COLUMN     "discount" INTEGER,
ADD COLUMN     "points_used" INTEGER;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER NOT NULL;
