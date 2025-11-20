import { PostgresRepository } from '../../repository/PostgresRepository'
import { RegisterProductService } from '../register/RegisterProductService'

export function makeRegisterProductService() {
	const repository = new PostgresRepository()
	const service = new RegisterProductService(repository)

	return service
}
