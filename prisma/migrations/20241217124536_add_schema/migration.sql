/*
  Warnings:

  - The values [MUSIC,SPORTS,THEATER,FANMEET,SEMINAR] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - The values [JAKARTA,BANDUNG,YOGYAKARTA,PADANG] on the enum `Location` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `inVoice_url` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Ticket` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Ticket` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to drop the column `user_id` on the `UserCoupon` table. All the data in the column will be lost.
  - Added the required column `datetime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Made the column `updated_at` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `invoice_url` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `updated_at` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `subPrice` to the `OrderDetails` table without a default value. This is not possible if the table is not empty.
  - Made the column `updated_at` on table `OrderDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Review` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `description` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `Ticket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `updated_at` on table `Ticket` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `customer_id` to the `UserCoupon` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TicketCategory" AS ENUM ('VIP', 'REGULAR');

-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('concert', 'sports', 'theater', 'fanmeet', 'seminar');
ALTER TABLE "Event" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Location_new" AS ENUM ('jakarta', 'bandung', 'yogyakarta');
ALTER TABLE "Event" ALTER COLUMN "location" TYPE "Location_new" USING ("location"::text::"Location_new");
ALTER TYPE "Location" RENAME TO "Location_old";
ALTER TYPE "Location_new" RENAME TO "Location";
DROP TYPE "Location_old";
COMMIT;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "date",
DROP COLUMN "time",
ADD COLUMN     "datetime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL DEFAULT ' ',
ADD COLUMN     "thumbnail" TEXT,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "inVoice_url",
ADD COLUMN     "invoice_url" TEXT NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "OrderDetails" ADD COLUMN     "subPrice" BIGINT NOT NULL,
ALTER COLUMN "quantity" SET DEFAULT 1,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "rating" SET DEFAULT 0,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "desc",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "maxSeats" INTEGER NOT NULL DEFAULT 1,
DROP COLUMN "category",
ADD COLUMN     "category" "TicketCategory" NOT NULL,
ALTER COLUMN "seats" SET DEFAULT 0,
ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "UserCoupon" DROP COLUMN "user_id",
ADD COLUMN     "customer_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserCoupon" ADD CONSTRAINT "UserCoupon_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPoint" ADD CONSTRAINT "UserPoint_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetails" ADD CONSTRAINT "OrderDetails_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetails" ADD CONSTRAINT "OrderDetails_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
