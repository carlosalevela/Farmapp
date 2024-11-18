/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de pedido
 * 
 */

const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();

// Agregar un inventario
const AgregarInventario = async (req = request, res = response) => {
  const { name, cantidad, productoId } = req.body;

  // Validar si faltan campos
  if (!name || !cantidad || !productoId) {
    return res.status(400).json({
      msg: 'Faltan datos para agregar el inventario',
    });
  }

  if (isNaN(cantidad) || isNaN(productoId)) {
    return res.status(400).json({
      msg: 'Los valores de cantidad o productoId no son válidos',
    });
  }

  try {
    // Verificar que el producto exista
    const productoExistente = await prisma.producto.findUnique({
      where: { idproducto: parseInt(productoId) },  // Cambio aquí, usando idproducto como clave
    });

    if (!productoExistente) {
      return res.status(400).json({
        msg: 'El producto no existe en la base de datos',
      });
    }

    const nuevoInventario = await prisma.inventario.create({
      data: {
        name,
        cantidad: parseInt(cantidad),
        productoId: parseInt(productoId),  // Relación con el producto usando el idproducto
      },
    });

    res.status(201).json({
      msg: 'Inventario agregado exitosamente',
      inventario: nuevoInventario,
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({
      msg: 'Error al agregar el inventario',
      error: error.message,
    });
  }
};

// Ver todos los inventarios
const VerInventarios = async (req = request, res = response) => {
  try {
    const inventarios = await prisma.inventario.findMany({
      include: { producto: true }, // Incluye detalles del producto relacionado
    });

    res.status(200).json(inventarios);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({
      msg: 'Error al obtener los inventarios',
    });
  }
};

// Ver un inventario específico por su id
const VerInventario = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const inventario = await prisma.inventario.findUnique({
      where: { id: parseInt(id) },  // El id corresponde a la clave primaria de Inventario
      include: { producto: true },   // Incluye detalles del producto relacionado
    });

    if (!inventario) {
      return res.status(404).json({
        msg: 'Inventario no encontrado',
      });
    }

    res.status(200).json(inventario);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({
      msg: 'Error al obtener el inventario',
    });
  }
};

// Eliminar un inventario por su id
const EliminarInventario = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const inventarioEliminado = await prisma.inventario.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({
      msg: 'Inventario eliminado exitosamente',
      inventario: inventarioEliminado,
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({
      msg: 'Error al eliminar el inventario',
    });
  }
};

// Editar un inventario por su id
const EditarInventario = async (req = request, res = response) => {
  const { id } = req.params;
  const { name, cantidad, productoId } = req.body;

  const dataToUpdate = {};

  if (name) dataToUpdate.name = name;
  if (cantidad) dataToUpdate.cantidad = parseInt(cantidad);
  if (productoId) dataToUpdate.productoId = parseInt(productoId);

  try {
    const inventarioEditado = await prisma.inventario.update({
      where: { id: parseInt(id) },
      data: dataToUpdate,
    });

    res.status(200).json({
      msg: 'Inventario actualizado exitosamente',
      inventario: inventarioEditado,
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({
      msg: 'Error al actualizar el inventario',
    });
  }
};

module.exports = {
  AgregarInventario,
  VerInventarios,
  VerInventario,
  EliminarInventario,
  EditarInventario,
};
