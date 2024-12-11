/*
  Warnings:

  - Changed the type of `precentage` on the `UserCoupon` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "UserCoupon_user_id_key";

-- AlterTable
ALTER TABLE "UserCoupon" DROP COLUMN "precentage",
ADD COLUMN     "precentage" INTEGER NOT NULL,
ALTER COLUMN "expired_at" DROP NOT NULL;
