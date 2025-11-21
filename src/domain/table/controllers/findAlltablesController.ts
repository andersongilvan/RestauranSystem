import { Request, Response, NextFunction } from 'express'
import { makeFilndAllTables } from '../services/@factory/makeFindAllTabablesservice'

export async function findAllTablesController(_request: Request, response: Response, next: NextFunction) {
	try {
		const findallTablesService = makeFilndAllTables()

		const result = await findallTablesService.execute()

		return response.status(200).json(result)
	} catch (error) {
		next(error)
	}
}
