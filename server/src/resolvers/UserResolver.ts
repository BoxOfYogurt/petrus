import { User } from "../entities/User";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

// interface UserInterface {
// 	id: string;
// 	firstname: string;
// 	lastname: string;
// 	username: string;
// 	password: string;
// }

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
	@Mutation(() => Boolean)
	async register(
		@Arg("username") username: string,
		@Arg("password") password: string
	) {
		const user = await User.findOne({ where: { username } });

		if (user) {
			throw new Error("Email already exist");
		}

		try {
			await User.insert({
				username,
				password,
			});
		} catch (err) {
			console.log(err);
			return false;
		}
		return true;
	}
}
