import { PostgresRepository } from '../../repository/PostgresRepository'
import { UpdateProductService } from '../update/UpdateProductService'

export function makeUpdateProductService() {
	const repository = new PostgresRepository()

	const service = new UpdateProductService(repository)

	return service
}
