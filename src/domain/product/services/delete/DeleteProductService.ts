import { ResourceNotFoundError } from '@/errors/ResourceNotFoundError'
import type { ProductRepository } from '../../repository/ProductRepository'

export class DeleteProductService {
	constructor(private productRepository: ProductRepository) {}

	async execute(id: number): Promise<void> {
		const productExists = await this.productRepository.findById(id)

		if (!productExists) {
			throw new ResourceNotFoundError('Product not found.')
		}

		await this.productRepository.delete(id)
	}
}
