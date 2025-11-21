import { Request, Response, NextFunction } from 'express'
import z from 'zod'
import { makeRegisterTableService } from '../services/@factory/makeRegisterTableService'

export async function registerTableController(request: Request, response: Response, next: NextFunction) {
	try {
		const requestBoby = z.object({
			tableNumber: z.number({ message: 'Talbe number must be a number' }),
		})

		const { tableNumber } = requestBoby.parse(request.body)

        console.log('table -> controller', tableNumber)

		const registerTableService = makeRegisterTableService()

		const result = await registerTableService.execute({ tableNumber })

		return response.status(201).json(result)
	} catch (error) {
		next(error)
	}
}
