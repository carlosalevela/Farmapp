-- CreateTable
CREATE TABLE "Producto" (
    "idproducto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Inventario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 0,
    "productoId" INTEGER NOT NULL,
    CONSTRAINT "Inventario_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto" ("idproducto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "inventarioId" INTEGER NOT NULL,
    CONSTRAINT "Categoria_inventarioId_fkey" FOREIGN KEY ("inventarioId") REFERENCES "Inventario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
