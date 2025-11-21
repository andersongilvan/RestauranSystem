import { findAllTablesController } from '@/domain/table/controllers/findAlltablesController'
import { registerTableController } from '@/domain/table/controllers/RegisterTableController'
import { Router } from 'express'

const tableRoutes = Router()

tableRoutes.post('/', registerTableController)
tableRoutes.get('/', findAllTablesController)

export { tableRoutes }
