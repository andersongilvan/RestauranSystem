import { Table } from '@/@types/Table'
import { ITableRepository } from '../../repository/ITableRepository'

interface FindAlltablesServiceResponse {
	tables: Table[]
}

export class FindAlltablesService {
	constructor(private tabeleRepository: ITableRepository) {}

	async execute(): Promise<FindAlltablesServiceResponse> {
		const tables = await this.tabeleRepository.findAll()

		return {
			tables,
		}
	}
}
