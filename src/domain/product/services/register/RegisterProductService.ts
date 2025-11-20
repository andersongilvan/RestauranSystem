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
		const productWhithSameName = await this.productRepository.findByName(name.toLocaleLowerCase())

		if (productWhithSameName) {
			throw new ResourceAlreadyExistError('Product whith same name duplicated')
		}

		const product = await this.productRepository.create({
			name: name.toLowerCase(),
			description: description.toLowerCase(),
			imgUrl,
			price,
		})

		return {
			product,
		}
	}
}
