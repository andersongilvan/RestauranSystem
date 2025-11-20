import type { CreateProductInput, Product, UpdateProductInput } from '@/@types/Product'
import { db } from '@/lib/knex'
import type { Page } from '@/utils/Pagination'
import type { ProductRepository } from './ProductRepository'

export class PostgresRepository implements ProductRepository {
	async delete(id: number): Promise<void> {
		await db.raw(
			`
			DELETE FROM products
			WHERE id = ?
		`,
			[id],
		)
	}
	async findAll(page: number): Promise<Page<Product>> {
		const limit = 10

		const ofSet = (page - 1) * limit

		const rowsCount = await db.raw(`
  			SELECT COUNT(*) FROM products
			`)

		const totalItems = Number(rowsCount.rows[0].count)

		const totalPages = Math.ceil(totalItems / limit)

		const { rows } = await db.raw<{ rows: Product[] }>(
			`
			SELECT *
			FROM products
			LIMIT ? OFFSET ?
		`,
			[limit, ofSet],
		)

		return {
			items: rows,
			totalItems,
			totalPages,
			currentPage: page,
		}
	}

	async update(id: number, data: UpdateProductInput): Promise<Product> {
		const { rows } = await db.raw<{ rows: Product[] }>(
			`
			UPDATE products
			SET name = ?, description = ?, img_url = ?, price = ?
			
			WHERE id = ?
			RETURNING *
		`,
			[data.name, data.description, data.imgUrl, data.price, id],
		)

		const product = rows[0]

		return product
	}

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

	async create({ name, description, imgUrl, price }: CreateProductInput): Promise<Product> {
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
