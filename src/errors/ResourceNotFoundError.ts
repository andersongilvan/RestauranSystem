export class ResourceNotFoundError extends Error {
	constructor(readonly message: string) {
		super(message)
	}
}
