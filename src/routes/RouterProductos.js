import ControladorProductos from '../controllers/ControladorProductos.js' //importo controller

import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

class RouterProductos {

  constructor() {
    this.controladorProductos = new ControladorProductos()
  }

  start() {

    let schema = buildSchema(`
      type Producto {
        id: ID!
        nombre: String,
        descripcion: String,
        codigo: String,
        thumbnail: String,
        precio: Float,
        stock: Int,
        timeStamp: Float
      },
      input ProductoInput {
        nombre: String,
        descripcion: String,
        codigo: String,
        thumbnail: String,
        precio: Float,
        stock: Int
      },
      type ProductoId {
        id: String
      }
      type Query {
        getAllProducts: [Producto],
        getProductById(id: ID!): Producto
      },
      type Mutation {
        createProduct(producto: ProductoInput): Producto,
        editProductById(id: ID!, producto: ProductoInput): Producto,
        deleteProductById(id: ID!): ProductoId
      }
    `)
    
    return graphqlHTTP({
      schema: schema,
      rootValue: {
        getAllProducts: this.controladorProductos.getAllProducts,
        getProductById: this.controladorProductos.getProductById,
        createProduct: this.controladorProductos.createProduct,
        editProductById: this.controladorProductos.editProductById,
        deleteProductById: this.controladorProductos.deleteProductById
      },
      graphiql: true
    })
  }
}

export default RouterProductos