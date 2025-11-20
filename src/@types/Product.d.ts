export type Product = {
	id: number
	name: string
	description: string
	imgUrl: string
	price: number
	created_at: Date
	updated_at: Date
}

export type CreateProductInput = {
	name: string
	description: string
	imgUrl: string
	price: number
}

export type UpdateProductInput = {
	name?: string
	description?: string
	imgUrl?: string
	price?: number
}
