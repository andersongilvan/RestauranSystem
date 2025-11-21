import { Table } from '@/@types/Table'
import { ITableRepository } from '../../repository/ITableRepository'
import { ResourceAlreadyExistError } from '@/errors/ResourseAreadyExistsError'

interface CreateTableServiceRequest {
	tableNumber: number
}

interface CreateTableServiceRespose {
	table: Table
}

export class RegisterTableService {
	constructor(private tableRepository: ITableRepository) {}

	async execute({ tableNumber }: CreateTableServiceRequest): Promise<CreateTableServiceRespose> {

        console.log('table -> service', tableNumber)

		const tableWhithSameNumber = await this.tableRepository.findByNumber(tableNumber)

		if (tableWhithSameNumber) {
			throw new ResourceAlreadyExistError('This table number already exists')
		}

		const table = await this.tableRepository.create({ tableNumber })

        console.log('table -> ', table)

		return {
			table,
		}
	}
}
