/*
  Warnings:

  - Added the required column `promotor_id` to the `OrderDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderDetails" ADD COLUMN     "promotor_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderDetails" ADD CONSTRAINT "OrderDetails_promotor_id_fkey" FOREIGN KEY ("promotor_id") REFERENCES "Promotor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
