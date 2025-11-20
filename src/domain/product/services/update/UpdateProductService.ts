import type { Product } from '@/@types/Product'
import { ResourceNotFoundError } from '@/errors/ResourceNotFoundError'
import type { ProductRepository } from '../../repository/ProductRepository'

interface UpdateProductServiceRequest {
	id: number
	data: {
		name: string
		description: string
		imgUrl: string
		price: number
	}
}

interface UpdateProductServiceResponse {
	product: Product
}

export class UpdateProductService {
	constructor(private productRepository: ProductRepository) {}

	async execute({ id, data }: UpdateProductServiceRequest): Promise<UpdateProductServiceResponse> {
		const productExists = await this.productRepository.findById(id)

		if (!productExists) {
			throw new ResourceNotFoundError('Product not found.')
		}

		const product = await this.productRepository.update(id, data)

		return {
			product,
		}
	}
}
