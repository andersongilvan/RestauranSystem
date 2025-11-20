import { PostgresRepository } from '../../repository/PostgresRepository'
import { DeleteProductService } from '../delete/DeleteProductService'

export function makeDeleteProductsService() {
	const repository = new PostgresRepository()
	const service = new DeleteProductService(repository)

	return service
}
