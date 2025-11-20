import { PostgresRepository } from '../../repository/PostgresRepository'
import { FindAllProdctsService } from '../findAll/FindAllProductsService'

export function makeFindAllProductsService() {
	const repository = new PostgresRepository()
	const service = new FindAllProdctsService(repository)

	return service
}
