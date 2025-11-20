import type { Product } from '@/@types/Product'
import type { Page } from '@/utils/Pagination'
import type { ProductRepository } from '../../repository/ProductRepository'

interface FindAllProductsServiceRequest {
	page: number
}

interface FindAllProductsServiceResponse {
	products: Page<Product>
}

export class FindAllProdctsService {
	constructor(private productRepository: ProductRepository) {}

	async execute({ page }: FindAllProductsServiceRequest): Promise<FindAllProductsServiceResponse> {
		const products = await this.productRepository.findAll(page)

		return {
			products,
		}
	}
}
