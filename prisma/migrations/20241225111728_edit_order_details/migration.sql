-- AlterTable
ALTER TABLE "OrderDetails" ADD COLUMN     "user_id" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "OrderDetails" ADD CONSTRAINT "OrderDetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
