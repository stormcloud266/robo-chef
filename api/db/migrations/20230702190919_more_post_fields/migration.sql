/*
  Warnings:

  - Added the required column `excerpt` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "excerpt" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;
