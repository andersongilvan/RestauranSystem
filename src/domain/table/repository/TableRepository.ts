import { CreateTableInput, Table } from '@/@types/Table'
import { ITableRepository } from './ITableRepository'
import { db } from '@/lib/knex'

export class TableRepository implements ITableRepository {
	async findAll(): Promise<Table[]> {
		const { rows } = await db.raw<{ rows: Table[] }>(` SELECT * FROM tables `)

		return rows
	}

	async create({ tableNumber }: CreateTableInput): Promise<Table> {
		const { rows } = await db.raw<{ rows: Table[] }>(
			`
            INSERT INTO tables (table_number)
            VALUES (?)
            RETURNING *
            `,
			[tableNumber],
		)

		const table = rows[0]

		return table
	}

	async findByNumber(tableNumber: number): Promise<Table | null> {
		const { rows } = await db.raw<{ rows: Table[] }>(
			`
            SELECT * FROM tables WHERE table_number = ?
            `,
			[tableNumber],
		)

		if (rows.length === 0) return null

		const table = rows[0]

		return table
	}
}
