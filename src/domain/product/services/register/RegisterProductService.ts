import type { Product } from '@/@types/Product'
import { ResourceAlreadyExistError } from '@/errors/ResourseAreadyExistsError'
import type { ProductRepository } from '../../repository/ProductRepository'

interface RegisterProductRequest {
	name: string
	description: string
	imgUrl: string
	price: number
}

interface RegisterProductResponse {
	product: Product
}

export class RegisterProductService {
	constructor(private productRepository: ProductRepository) {}

	async execute({ name, description, imgUrl, price }: RegisterProductRequest): Promise<RegisterProductResponse> {
		const productWhithSameName = await this.productRepository.findByName(name)

		if (productWhithSameName) {
			throw new ResourceAlreadyExistError('This product already exsists')
		}

		const product = await this.productRepository.create({
			name: name.toLowerCase(),
			description,
			imgUrl,
			price,
		})

		return {
			product,
		}
	}
}
