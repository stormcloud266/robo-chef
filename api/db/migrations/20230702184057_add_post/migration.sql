-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "body" TEXT NOT NULL,
    "ingredients" TEXT[],
    "preparation" TEXT[],
    "prepTime" INTEGER NOT NULL,
    "cookTime" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
