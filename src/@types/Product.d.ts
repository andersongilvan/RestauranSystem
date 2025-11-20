export interface Product {
	id: number
	name: string
	description: string
	imgUrl: string
	price: number
	created_at: Date
	updated_at: Date
}

export interface CreateProductInput {
	name: string
	description: string
	imgUrl: string
	price: number
}
