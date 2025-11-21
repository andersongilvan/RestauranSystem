export interface Page<T> {
	info: {
		totalItems: number
		totalPages: number
		currentPage: number
	}

	items: T[]
}
