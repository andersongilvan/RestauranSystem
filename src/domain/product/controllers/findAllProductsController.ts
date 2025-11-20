import type { NextFunction, Request, Response } from 'express'
import { makeFindAllProductsService } from '../services/@factory/makeFindAllProductsService'

export async function findAllProductsController(request: Request, response: Response, next: NextFunction) {
	try {
		const pageNumber = Number(request.query.page) || 1

		const findAllProductsService = makeFindAllProductsService()

		const products = await findAllProductsService.execute({ page: pageNumber })

		return response.status(200).json(products)
	} catch (error) {
		next(error)
	}
}
