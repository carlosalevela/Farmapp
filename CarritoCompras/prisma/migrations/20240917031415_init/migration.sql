-- CreateTable
CREATE TABLE "Carrito" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "total" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Compra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nameProduct" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" INTEGER NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "carritoID" INTEGER NOT NULL,
    CONSTRAINT "Compra_carritoID_fkey" FOREIGN KEY ("carritoID") REFERENCES "Carrito" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
