import type { NextFunction, Request, Response } from 'express'
import z from 'zod'
import { makeUpdateProductService } from '../services/@factory/makeUpdateProductService'

export async function updateProductController(request: Request, response: Response, next: NextFunction) {
	try {
		const idSchema = z.object({
			id: z.coerce.number({ message: 'ID must be a number' }).positive(),
		})

		const bodySchema = z.object({
			name: z.string().nonempty({ message: 'Name is required' }),
			description: z.string().nonempty({ message: 'Name is required' }),
			imgUrl: z.string().nonempty({ message: 'URL is required' }),
			price: z.number().positive({ message: 'Price must be a positive number' }),
		})

		const { id } = idSchema.parse(request.params)

		const { name, description, imgUrl, price } = bodySchema.parse(request.body)

		const updateProductService = makeUpdateProductService()

		const product = await updateProductService.execute({
			id,
			data: {
				name,
				description,
				imgUrl,
				price,
			},
		})

		return response.status(200).json(product)
	} catch (error) {
		next(error)
	}
}
