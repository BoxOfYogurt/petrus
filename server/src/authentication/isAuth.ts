import { verify } from "jsonwebtoken";
import { MyContext } from "../Context";
import { MiddlewareFn, UnauthorizedError } from "type-graphql";

export const isAuthenticated: MiddlewareFn<MyContext> = ({ context }, next) => {
	const auth = context.req.headers["authorization"];

	if (!auth) {
		throw new UnauthorizedError();
	}
	try {
		const token = auth.split(" ")[1];
		const payload = <any>verify(token, process.env.ACCESS_TOKEN_SECRET!, {
			complete: false,
		});
		context.payload = payload;
	} catch (err) {
		throw new UnauthorizedError();
	}

	return next();
};
