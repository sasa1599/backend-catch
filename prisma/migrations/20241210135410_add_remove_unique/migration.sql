/*
  Warnings:

  - The values [SURABAYA,SEMARANG] on the enum `Location` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Location_new" AS ENUM ('JAKARTA', 'BANDUNG', 'YOGYAKARTA', 'PADANG');
ALTER TABLE "Event" ALTER COLUMN "location" TYPE "Location_new" USING ("location"::text::"Location_new");
ALTER TYPE "Location" RENAME TO "Location_old";
ALTER TYPE "Location_new" RENAME TO "Location";
DROP TYPE "Location_old";
COMMIT;

-- DropIndex
DROP INDEX "UserCoupon_user_id_idx";

-- DropIndex
DROP INDEX "UserPoint_user_id_idx";

-- DropIndex
DROP INDEX "UserPoint_user_id_key";
