export class ResourceAlreadyExistError extends Error {
	constructor(readonly message: string) {
		super(message)
	}
}
