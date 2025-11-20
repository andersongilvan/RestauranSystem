import { Router } from 'express'
import { findProductByIdController } from '@/domain/product/controllers/findProductByIdController'
import { registerProductController } from '@/domain/product/controllers/registerProductController'

const productRoutes = Router()

productRoutes.post('/', registerProductController)
productRoutes.get('/:id', findProductByIdController)

export { productRoutes }
