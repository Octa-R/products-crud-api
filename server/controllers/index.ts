import { Product } from "../models/product.model"
const createProduct = async (req, res) => {
  const data = req.body
  if (!data.name || !data.description || !data.unit_price || !data.stock) {
    res.status(400).send({ ok: false, message: "faltan datos" })
  }
  try {
    await Product.create(data)
    res.send({ ok: true, message: "producto creado con exito" })
  } catch (error) {
    res.status(400).send({ ok: false, message: "error en la creacion del producto" })
  }
}

const getAllProducts = async (req, res) => {
  const products = await Product.findAll()
  res.json({ products: products })
}
const getProductById = async (req, res) => {
  const id = req.params.id
  const product = await Product.findByPk(id)
  if (!product) {
    res.status(404).send({ ok: false, message: "producto no encontrado" })
  }
  res.json(product)
}

const updateProduct = async (req, res) => {
  const id = req.params.id
  const data = req.body
  try {
    await Product.update(data, { where: { id } })
    res.send({ ok: true, message: "producto actualizado con exito" })
  } catch (error) {
    res.status(400).send({ ok: false, message: "error en la actualizacion del producto" })
  }
}

const deleteProduct = async (req, res) => {
  const id = req.params.id
  try {
    await Product.update({ active: false }, { where: { id } })
    res.send({ ok: true, message: "producto eliminado con exito" })
  } catch (error) {
    res.status(400).send({ ok: false, message: "error en la eliminacion del producto" })
  }
}

export { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct }