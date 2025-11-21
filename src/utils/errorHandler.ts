import type { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import { ResourceNotFoundError } from '@/errors/ResourceNotFoundError'
import { ResourceAlreadyExistError } from '@/errors/ResourseAreadyExistsError'

export function errorHandler(erro: Error, _request: Request, response: Response, _next: NextFunction) {
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
	if (erro instanceof ResourceAlreadyExistError) {
		return response.status(400).json({ error: erro.message })
	}

	if (erro instanceof ResourceNotFoundError) {
		return response.status(400).json({ error: erro.message })
	}

	console.log(erro)
	return response.status(500).json(erro.message)
}
