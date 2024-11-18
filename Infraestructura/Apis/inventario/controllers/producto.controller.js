const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();

// Agregar un producto
const AgregarProducto = async (req = request, res = response) => {
  const { nombre, precio, cantidad, descripcion } = req.body;

  // Validar si faltan campos
  if (!nombre || !precio || !cantidad || !descripcion) {
    return res.status(400).json({
      msg: 'Faltan datos para agregar el producto'
    });
  }

  try {
    const nuevoProducto = await prisma.producto.create({
      data: {
        nombre,
        precio: parseFloat(precio),
        cantidad: parseInt(cantidad),
        descripcion,
      }
    });

    res.status(201).json({
      msg: 'Producto agregado exitosamente',
      producto: nuevoProducto
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Error al agregar el producto',
    });
  }
};

// Ver todos los productos
const VerProductos = async (req = request, res = response) => {
  try {
    const productos = await prisma.producto.findMany();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Error al obtener los productos',
    });
  }
};

// Ver un producto específico por su id
const VerProducto = async (req = request, res = response) => {
  const { idproducto } = req.params;

  try {
    const producto = await prisma.producto.findUnique({
      where: { idproducto: parseInt(idproducto) },
    });

    if (!producto) {
      return res.status(404).json({
        msg: 'Producto no encontrado',
      });
    }

    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Error al obtener el producto',
    });
  }
};

// Eliminar un producto por su id
const EliminarProducto = async (req = request, res = response) => {
  const { idproducto } = req.params;

  try {
    const productoEliminado = await prisma.producto.delete({
      where: { idproducto: parseInt(idproducto) },
    });

    res.json({
      msg: 'Producto eliminado exitosamente',
      producto: productoEliminado,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Error al eliminar el producto',
    });
  }
};

// Editar un producto por su id
const EditarProducto = async (req = request, res = response) => {
  const { idproducto } = req.params;
  const { nombre, precio, cantidad, descripcion } = req.body;

  try {
    const productoEditado = await prisma.producto.update({
      where: { idproducto: parseInt(idproducto) },
      data: {
        nombre: nombre || undefined,
        precio: precio ? parseFloat(precio) : undefined,
        cantidad: cantidad ? parseInt(cantidad) : undefined,
        descripcion: descripcion || undefined,
      },
    });

    res.json({
      msg: 'Producto actualizado exitosamente',
      producto: productoEditado,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'Error al actualizar el producto',
    });
  }
};

module.exports = {
  AgregarProducto,
  VerProductos,
  VerProducto,
  EliminarProducto,
  EditarProducto,
};
