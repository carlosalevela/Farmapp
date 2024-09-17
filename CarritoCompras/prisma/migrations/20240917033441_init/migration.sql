/*
  Warnings:

  - Added the required column `descuento` to the `Carrito` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Carrito" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "descuento" INTEGER NOT NULL
);
INSERT INTO "new_Carrito" ("id", "name", "total") SELECT "id", "name", "total" FROM "Carrito";
DROP TABLE "Carrito";
ALTER TABLE "new_Carrito" RENAME TO "Carrito";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
