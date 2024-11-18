-- CreateTable
CREATE TABLE "Inventario" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("idproducto") ON DELETE RESTRICT ON UPDATE CASCADE;
