import mongoose, { Schema, Document } from 'mongoose'

export interface IProduct extends Document {
  nombre: string
  unidad: string
  cantidad: number
  marca: string

  requirementId: string
  inventoryId: string
}

const ProductSchema = new Schema<IProduct>(
  {
    nombre: { type: String, required: true },
    unidad: { type: String, required: true },
    cantidad: { type: Number, required: true },
    marca: { type: String, required: true },

    requirementId: { type: String, required: true },
    inventoryId: { type: String },
  },
  { timestamps: true } // 'createdAt' y 'updatedAt'
)

const Products = mongoose.model<IProduct>('Products', ProductSchema)

export default Products
