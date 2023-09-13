import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "./service";

const productsRoutes = Router();

// Trae todos los productos
productsRoutes.get("/", (req, res) => {
    res.json(getAllProducts());
});

// Trae un producto especifico por id
productsRoutes.get("/:id", (req, res) => {
    const id = req.params.id
    res.json(getProductById(id))
})

// Crea un nuevo producto
productsRoutes.post("/", (req, res) => {
    const product = req.body
    createProduct(product)
    res.json(product)
})

// Actualiza un producto del listado
productsRoutes.put("/:id", (req, res) => {
    const id = req.params.id
    const product = req.body
    res.json(updateProduct(id, product))
})

// Elimina un producto del listado
productsRoutes.delete("/:id", (req, res) => {
    const id = req.params.id
    deleteProduct(id)
    res.json(getAllProducts)
})

export default productsRoutes;