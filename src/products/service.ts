import allProducts from "./mock-data"

export const getAllProducts = () => {
    return allProducts
}

export const getProductById = (id: string) => {
    return allProducts.find((product) => product.id === id)
}

export const createProduct = (product: any) => {
    allProducts.push(product)
    return product
}

export const updateProduct = (id: string, product: any) => {
    const index = allProducts.findIndex((product) => product.id === id)
    allProducts[index] = product
    return product
}

export const deleteProduct = (id: string) => {
    const index = allProducts.findIndex((product) => product.id === id)
    allProducts.splice(index, 1)
    return id
}