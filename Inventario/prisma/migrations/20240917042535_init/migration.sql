/*
  Warnings:

  - Added the required column `inventarioID` to the `Categoria` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "inventarioID" INTEGER NOT NULL,
    CONSTRAINT "Categoria_inventarioID_fkey" FOREIGN KEY ("inventarioID") REFERENCES "Inventario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Categoria" ("cantidad", "id", "productoId") SELECT "cantidad", "id", "productoId" FROM "Categoria";
DROP TABLE "Categoria";
ALTER TABLE "new_Categoria" RENAME TO "Categoria";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
