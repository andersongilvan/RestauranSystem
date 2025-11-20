import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

export function errorHandler(erro: Error, request_: Request, response: Response, _: NextFunction) {
	if (erro instanceof ZodError) {
		const errorList = erro._zod.def.map((e) => ({
			field: e.path.join(),
			message: e.message,
		}))

		return response.status(400).json({
			status: 'error',
			message: 'Validation failed',
			errors: errorList,
		})
	}
}
