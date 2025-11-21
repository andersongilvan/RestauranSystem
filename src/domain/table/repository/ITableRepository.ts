import { CreateTableInput, Table } from '@/@types/Table'

export interface ITableRepository {
	create(data: CreateTableInput): Promise<Table>
	findByNumber(tableNumber: number): Promise<Table | null>
	findAll(): Promise<Table[]>
}
