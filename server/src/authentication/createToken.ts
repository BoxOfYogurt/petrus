import { sign } from "jsonwebtoken";
import { User } from "../entities/User";

export const createAccessToken = (user: User) => {
	console.log(user.readonly_id);

	return sign({ id: user.readonly_id }, process.env.ACCESS_TOKEN_SECRET!, {
		expiresIn: "20m",
	});
};

export const createRefreshToken = (user: User) => {
	console.log(user.readonly_id, "in refresh");

	return sign({ id: user.readonly_id }, process.env.REFRESH_TOKEN_SECRET!, {
		expiresIn: "8h",
	});
};
