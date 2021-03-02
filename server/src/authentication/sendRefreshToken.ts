import { Response } from "express";

export const sendRefreshToken = (res: Response, token: String) => {
	res.cookie("petid", token, {
		httpOnly: true,
		sameSite: "lax",
		expires: new Date(Date.now() + 8 * 3600000),
	});
};
