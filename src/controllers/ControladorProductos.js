import ApiProductos from '../services/ApiProductos.js'

class ControladorProductos {

    constructor() {
        this.apiProductos = new ApiProductos()
    }

    getAllProducts = async () => await this.apiProductos.getAllProducts()

    getProductById = async ({ id }) => await this.apiProductos.getProductById(id)

    createProduct = async ({ producto }) => await this.apiProductos.createProduct(producto)

    editProductById = async ({ id, producto }) => await this.apiProductos.editProductById(id, producto)

    deleteProductById = async ({ id }) => await this.apiProductos.deleteProductById(id)
}

export default ControladorProductos