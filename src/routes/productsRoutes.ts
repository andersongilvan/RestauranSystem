import { Router } from 'express'
import { deleteProductController } from '@/domain/product/controllers/deleteProductController'
import { findAllProductsController } from '@/domain/product/controllers/findAllProductsController'
import { findProductByIdController } from '@/domain/product/controllers/findProductByIdController'
import { registerProductController } from '@/domain/product/controllers/registerProductController'
import { updateProductController } from '@/domain/product/controllers/updateProductController'

const productRoutes = Router()

productRoutes.post('/', registerProductController)
productRoutes.get('/:id', findProductByIdController)
productRoutes.put('/:id', updateProductController)
productRoutes.get('/', findAllProductsController)
productRoutes.delete('/:id', deleteProductController)

export { productRoutes }
