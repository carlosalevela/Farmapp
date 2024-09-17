/*
  Warnings:

  - You are about to drop the column `cantidad` on the `Categoria` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productoId" INTEGER NOT NULL,
    "inventarioID" INTEGER NOT NULL,
    CONSTRAINT "Categoria_inventarioID_fkey" FOREIGN KEY ("inventarioID") REFERENCES "Inventario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Categoria" ("id", "inventarioID", "productoId") SELECT "id", "inventarioID", "productoId" FROM "Categoria";
DROP TABLE "Categoria";
ALTER TABLE "new_Categoria" RENAME TO "Categoria";
CREATE TABLE "new_Inventario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Inventario" ("id", "name") SELECT "id", "name" FROM "Inventario";
DROP TABLE "Inventario";
ALTER TABLE "new_Inventario" RENAME TO "Inventario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
