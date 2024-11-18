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
    "cantidad" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Inventario_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto" ("idproducto") ON DELETE RESTRICT ON UPDATE CASCADE
);
