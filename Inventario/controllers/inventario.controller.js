/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de pedido
 * 
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Crear un inventario
const createInventario = async (req, res) => {
    const { name, cantidad, productoId } = req.body;
    try {
    const inventario = await prisma.inventario.create({
        data: {
        name,
        cantidad,
        productoId,
    },
    });
    res.status(201).json(inventario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el inventario' });
  }
};

// Obtener todos los inventarios
const getInventarios = async (req, res) => {
  try {
    const inventarios = await prisma.inventario.findMany({
      include: {
        producto: true, // Incluye el producto relacionado
        categorias: true, // Incluye las categorías relacionadas
      },
    });
    res.status(200).json(inventarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los inventarios' });
  }
};

// Obtener un inventario por ID
const getInventarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const inventario = await prisma.inventario.findUnique({
      where: { id: parseInt(id) },
      include: {
        producto: true,
        categorias: true,
      },
    });
    if (!inventario) {
      return res.status(404).json({ error: 'Inventario no encontrado' });
    }
    res.status(200).json(inventario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el inventario' });
  }
};

// Actualizar un inventario
const updateInventario = async (req, res) => {
  const { id } = req.params;
  const { name, cantidad, productoId } = req.body;
  try {
    const inventario = await prisma.inventario.update({
      where: { id: parseInt(id) },
      data: {
        name,
        cantidad,
        productoId,
      },
    });
    res.status(200).json(inventario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el inventario' });
  }
};

// Eliminar un inventario
const deleteInventario = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.inventario.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: 'Inventario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el inventario' });
  }
};

module.exports = {
  createInventario,
  getInventarios,
  getInventarioById,
  updateInventario,
  deleteInventario,
};
