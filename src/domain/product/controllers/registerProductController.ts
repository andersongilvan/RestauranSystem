import type { NextFunction, Request, Response } from 'express'
import z from 'zod'
import { makeRegisterProductService } from '../services/@factory/makeRegisterProductService'

export async function registerProductController(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	const registerProductService = makeRegisterProductService()

	try {
		const bodySchema = z.object({
			name: z.string().nonempty({ message: 'Name is required' }),
			description: z.string().nonempty({ message: 'Name is required' }),
			imgUrl: z.string().url({ message: 'Image URL must be a valid URL' }),
			price: z
				.number()
				.positive({ message: 'Price must be a positive number' }),
		})

		const { name, description, imgUrl, price } = bodySchema.parse(request.body)

		const product = await registerProductService.execute({
			name,
			description,
			imgUrl,
			price,
		})

		return response.status(201).json(product)
	} catch (error) {
		next(error)
	}
}
