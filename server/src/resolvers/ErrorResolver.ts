import { Field, ObjectType } from "type-graphql";
import { ErrorCode, ErrorMSG } from "./ErrorCodes";

@ObjectType()
export class ErrorResponse {
	@Field()
	field: string;
	@Field()
	message: ErrorMSG;
	@Field()
	code: ErrorCode;
}
