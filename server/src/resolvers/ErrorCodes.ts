export enum ErrorMSG {
	CLIENT_NULL = "...no data recived",
	SERVER_NULL = "...no data found",
	NOT_UNIQUE = "...this field needs to be unique",
	INVALID_LENGTH = "...invalid length",
	MUTATION_FAIL = "...Failed to update/write to database. contact admin",
	DOES_NOT_EXIST = "...does not exist",
	INVALID_CREDS = "...invalid input",
}

//update later
export enum ErrorCode {
	CLIENT_NULL = 400,
	SERVER_NULL = 404,
	NOT_UNIQUE = 409,
	INVALID_LENGTH = 400,
	MUTATION_FAIL = 500,
	DOES_NOT_EXIST = 404,
	INVALID_CREDS = 400,
}
