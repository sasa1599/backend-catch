-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "mid_payment_type" TEXT,
ADD COLUMN     "mid_transaction_id" INTEGER,
ADD COLUMN     "mid_transaction_status" TEXT,
ADD COLUMN     "mid_transaction_time" TIMESTAMP(3);
