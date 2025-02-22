import { Request, Response, Router } from 'express'

import Products from '@/models/products'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: '¡Hola desde Express con TypeScript!' })
})

router.post(
  '/products/create',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { nombre, unidad, cantidad, marca } = req.body

      if (!nombre || !unidad || !cantidad || !marca) {
        res.status(400).json({ message: 'Todos los campos son obligatorios' })
        return
      }

      const nuevoProducto = new Products({ nombre, unidad, cantidad, marca })
      await nuevoProducto.save()

      res.status(201).json(nuevoProducto)
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el producto', error })
    }
  }
)

export default router
