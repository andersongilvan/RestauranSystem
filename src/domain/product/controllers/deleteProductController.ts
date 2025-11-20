import type { NextFunction, Request, Response } from 'express'
import z from 'zod'
import { makeDeleteProductsService } from '../services/@factory/makeDeleteProductService'

export async function deleteProductController(request: Request, response: Response, next: NextFunction) {
	try {
		const requestSchema = z.object({
			id: z.coerce.number({ message: 'ID must be a number' }).positive(),
		})

		const { id } = requestSchema.parse(request.params)

		const deleteProductService = makeDeleteProductsService()

		await deleteProductService.execute(id)

		return response.status(204).send()
	} catch (error) {
		next(error)
	}
}
