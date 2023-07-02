/*
  Warnings:

  - Made the column `userId` on table `Rating` required. This step will fail if there are existing NULL values in that column.
  - Made the column `postId` on table `Rating` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_postId_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_userId_fkey";

-- AlterTable
ALTER TABLE "Rating" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "postId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
