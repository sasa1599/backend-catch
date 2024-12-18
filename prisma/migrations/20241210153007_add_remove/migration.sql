-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "OrderDetails" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Promotor" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserCoupon" ALTER COLUMN "updated_at" DROP NOT NULL;
