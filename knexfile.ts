import type { Knex } from 'knex'
import { env } from '@/env'

const config: Knex.Config = {
	client: 'pg',
	connection: {
		host: env.HOST,
		user: env.POSTGRES_USER,
		password: env.POSTGRES_PASSWORD,
		database: env.POSTGRES_DB,
	},
	migrations: {
		extension: 'ts',
		directory: './src/database/migrations',
	},
	seeds: {
		extension: 'ts',
		directory: '/src/database/seeds',
	},
}

export default config
