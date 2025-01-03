/*
  Warnings:

  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Review` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `rating` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "RatingRange" AS ENUM ('1', '2', '3', '4', '5');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "coupon_promotor" INTEGER;

-- AlterTable
ALTER TABLE "Review" DROP CONSTRAINT "Review_pkey",
DROP COLUMN "created_at",
DROP COLUMN "description",
DROP COLUMN "id",
DROP COLUMN "updated_at",
ADD COLUMN     "comment" TEXT NOT NULL,
DROP COLUMN "rating",
ADD COLUMN     "rating" "RatingRange" NOT NULL,
ADD CONSTRAINT "Review_pkey" PRIMARY KEY ("user_id", "event_id");
