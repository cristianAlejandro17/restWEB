-- CreateTable
CREATE TABLE "public"."todo" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "completedAdt" TIMESTAMP,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
