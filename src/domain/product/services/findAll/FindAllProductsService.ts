import type { Product } from '@/@types/Product'
import type { Page } from '@/utils/Pagination'
import type { ProductRepository } from '../../repository/ProductRepository'

interface FindAllProductsServiceRequest {
	productName?: string
	page: number
}

interface FindAllProductsServiceResponse {
	page: Page<Product>
}

export class FindAllProdctsService {
	constructor(private productRepository: ProductRepository) {}

	async execute({ page, productName }: FindAllProductsServiceRequest): Promise<FindAllProductsServiceResponse> {
		const pageProducts = await this.productRepository.findAll(page, productName)

		return {
			page: pageProducts,
		}
	}
}
