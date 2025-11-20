import type { CreateProductInput, Product } from '@/@types/Product'

export interface ProductRepository {
	create(data: CreateProductInput): Promise<Product>
	findByName(name: string): Promise<Product | null>
	findById(id: number): Promise<Product | null>
}
