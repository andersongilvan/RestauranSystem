import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	await knex.raw(`
        CREATE TABLE tables(
            id SERIAL PRIMARY KEY,
            table_number INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        
        `)
}

export async function down(knex: Knex): Promise<void> {
	await knex.raw(`
        DROP TABLE tables
    `)
}
