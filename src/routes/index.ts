import { Router } from 'express'
import { productRoutes } from './productsRoutes'
import { tableRoutes } from './tablesRoutes'

const routes = Router()

routes.use('/product', productRoutes)
routes.use('/table', tableRoutes)

export { routes }
