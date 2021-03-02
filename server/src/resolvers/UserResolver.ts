import { User } from "../entities/User";
import { ErrorResponse } from "./ErrorResolver";
import {
	createAccessToken,
	createRefreshToken,
} from "../authentication/createToken";
import { sendRefreshToken } from "../authentication/sendRefreshToken";
import {
	Resolver,
	Query,
	Mutation,
	Arg,
	ObjectType,
	Field,
	InputType,
	Ctx,
} from "type-graphql";
import argon2 from "argon2";
import { ErrorCode, ErrorMSG } from "./ErrorCodes";
import { MyContext } from "../Context";

@InputType()
class UserInput {
	@Field()
	username: string;
	@Field()
	password: string;
}

@ObjectType()
class UserResponse {
	@Field(() => ErrorResponse, { nullable: true })
	error?: ErrorResponse;
	@Field(() => User, { nullable: true })
	user?: User;
	@Field(() => String, { nullable: true })
	accesstoken?: string;
}

@Resolver()
export class UserResolver {
	@Query(() => String)
	hello() {
		return "hi";
	}

	@Query(() => [User])
	async getAll(): Promise<User[]> {
		const allUsers = await User.find();
		return allUsers;
	}
	/*
=================================================
	REGISTER MUTATION 
=================================================
 */

	@Mutation(() => UserResponse)
	async register(@Arg("input") input: UserInput): Promise<UserResponse> {
		if (input.username.length < 2) {
			return {
				error: {
					field: "username",
					message: ErrorMSG.INVALID_LENGTH,
					code: ErrorCode.INVALID_LENGTH,
				},
			};
		}
		if (input.password.length < 5) {
			return {
				error: {
					field: "password",
					message: ErrorMSG.INVALID_LENGTH,
					code: ErrorCode.INVALID_LENGTH,
				},
			};
		}
		const search = await User.findOne({ where: { username: input.username } });

		if (search?.username === input.username) {
			return {
				error: {
					field: "username",
					message: ErrorMSG.NOT_UNIQUE,
					code: ErrorCode.NOT_UNIQUE,
				},
			};
		}
		const hash = await argon2.hash(input.password);

		const user = await User.create({
			username: input.username,
			password: hash,
		}).save();

		return {
			user,
		};
	}

	/*
=================================================
	LOGIN MUTATION
=================================================
 */
	@Mutation(() => UserResponse)
	async login(
		@Arg("input") input: UserInput,
		@Ctx() { res }: MyContext
	): Promise<UserResponse> {
		if (!input.username || !input.password) {
			return {
				error: {
					field: "username/password",
					message: ErrorMSG.CLIENT_NULL,
					code: ErrorCode.CLIENT_NULL,
				},
			};
		}
		if (input.password.length < 3 || input.username.length < 3) {
			return {
				error: {
					field: "username/password",
					message: ErrorMSG.INVALID_LENGTH,
					code: ErrorCode.INVALID_LENGTH,
				},
			};
		}
		const user = await User.findOne({ where: { username: input.username } });

		if (!user) {
			return {
				error: {
					field: "user",
					message: ErrorMSG.DOES_NOT_EXIST,
					code: ErrorCode.DOES_NOT_EXIST,
				},
			};
		}
		const valid = await argon2.verify(user.password, input.password);
		if (!valid) {
			return {
				error: {
					field: "password",
					message: ErrorMSG.INVALID_CREDS,
					code: ErrorCode.INVALID_CREDS,
				},
			};
		}

		sendRefreshToken(res, createRefreshToken(user));
		const token = createAccessToken(user);
		return {
			user,
			accesstoken: token,
		};
	}
}
