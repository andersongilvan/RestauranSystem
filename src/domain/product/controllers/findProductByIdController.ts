import type { NextFunction, Request, Response } from 'express'
import z from 'zod'
import { makeFindProductByIdService } from '../services/@factory/makeFindproductByIdservice'

export async function findProductByIdController(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	try {
		const paramsSchema = z.object({
			id: z.coerce.number({ message: 'ID must be a number' }).positive(),
		})

		const { id } = paramsSchema.parse(request.params)

		const findProductByIdService = makeFindProductByIdService()

		const product = await findProductByIdService.execute(id)

		return response.status(200).json(product)
	} catch (error) {
		next(error)
	}
}
