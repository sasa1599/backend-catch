/*
  Warnings:

  - You are about to drop the column `name` on the `Promotor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Promotor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Promotor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Promotor" DROP COLUMN "name",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Promotor_username_key" ON "Promotor"("username");
