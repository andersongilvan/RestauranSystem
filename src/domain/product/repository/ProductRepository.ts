import type { CreateProductInput, Product, UpdateProductInput } from '@/@types/Product'
import type { Page } from '@/utils/Pagination'

export interface ProductRepository {
	create(data: CreateProductInput): Promise<Product>
	findByName(name: string): Promise<Product | null>
	findById(id: number): Promise<Product | null>
	update(id: number, data: Partial<UpdateProductInput>): Promise<Product>
	findAll(page: number, productName?: string): Promise<Page<Product>>
	delete(id: number): Promise<void>
}
