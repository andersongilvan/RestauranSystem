import { Router } from 'express'
import { productRoutes } from './productsRoutes'

const routes = Router()

routes.use('/product', productRoutes)

export { routes }
