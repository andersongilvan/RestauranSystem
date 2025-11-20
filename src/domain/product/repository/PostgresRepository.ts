import type { CreateProductInput, Product } from '@/@types/Product'
import { db } from '@/lib/knex'
import type { ProductRepository } from './ProductRepository'

export class PostgresRepository implements ProductRepository {
	async findById(id: number): Promise<Product | null> {
		const { rows } = await db.raw<{ rows: Product[] }>(
			`
			SELECT *
			FROM products
			WHERE id = ?
		`,
			[id],
		)
		if (rows.length === 0) {
			return null
		}
		const product = rows[0]
		return product
	}

	async findByName(name: string): Promise<Product | null> {
		const { rows } = await db.raw<{ rows: Product[] }>(
			`
			SELECT *
			FROM products
			WHERE name = ?
		`,
			[name],
		)
		if (rows.length === 0) {
			return null
		}
		const product = rows[0]
		return product
	}

	async create({
		name,
		description,
		imgUrl,
		price,
	}: CreateProductInput): Promise<Product> {
		const { rows } = await db.raw<{ rows: Product[] }>(
			`
			INSERT INTO products (name, description, img_url, price)
			VALUES (?, ?, ?, ?)
			RETURNING *
		`,
			[name, description, imgUrl, price],
		)

		const product = rows[0]

		return product
	}
}
