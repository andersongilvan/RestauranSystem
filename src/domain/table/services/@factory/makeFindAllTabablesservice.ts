import { TableRepository } from '../../repository/TableRepository'
import { FindAlltablesService } from '../findAll/FindAlltablesService'

export function makeFilndAllTables() {
	const tableRepository = new TableRepository()

	const findallTablesService = new FindAlltablesService(tableRepository)

	return findallTablesService
}
