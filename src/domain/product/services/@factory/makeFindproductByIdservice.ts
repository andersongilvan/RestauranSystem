import { PostgresRepository } from '../../repository/PostgresRepository'
import { findProductByIdService } from '../FindById/FindProducByIdService'

export function makeFindProductByIdService() {
	const repository = new PostgresRepository()
	const service = new findProductByIdService(repository)

	return service
}
