import type { Product } from '@/@types/Product'
import { ResourceNotFoundError } from '@/errors/ResourceNotFoundError'
import type { ProductRepository } from '../../repository/ProductRepository'

interface FindProductByIdResponse {
	product: Product
}

export class findProductByIdService {
	constructor(private productRepository: ProductRepository) {}

	async execute(idProduct: number): Promise<FindProductByIdResponse> {
		const product = await this.productRepository.findById(idProduct)

		if (!product) {
			throw new ResourceNotFoundError('Product not found')
		}

		return {
			product,
		}
	}
}
