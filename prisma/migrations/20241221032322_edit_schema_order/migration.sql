/*
  Warnings:

  - You are about to drop the column `event_id` on the `Order` table. All the data in the column will be lost.
  - The primary key for the `OrderDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `OrderDetails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_event_id_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "event_id";

-- AlterTable
ALTER TABLE "OrderDetails" DROP CONSTRAINT "OrderDetails_pkey",
DROP COLUMN "id",
ALTER COLUMN "quantity" DROP DEFAULT,
ADD CONSTRAINT "OrderDetails_pkey" PRIMARY KEY ("ticket_id", "order_id");
