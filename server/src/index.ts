import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

/* Resolvers */
import { UserResolver } from "./resolvers/UserResolver";
import { CategoryResolver } from "./resolvers/CategoryResolver";
import { SubcategoryResolver } from "./resolvers/SubcategoryResolver";
import { TaskResolver } from "./resolvers/TaskResolver";
import { NoteResolver } from "./resolvers/NoteResolver";
import { ProjectResolver } from "./resolvers/ProjectResolver";

const PORT = process.env.PORT || 4000;

const main = async () => {
	const app = express();
	app.use(
		cors({
			origin: "http://localhost:3000",
			credentials: true,
		})
	);

	await createConnection();
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [
				UserResolver,
				CategoryResolver,
				ProjectResolver,
				SubcategoryResolver,
				TaskResolver,
				NoteResolver,
			],
			validate: false,
		}),
		context: ({ req, res }) => ({ req, res }),
	});

	apolloServer.applyMiddleware({ app, cors: false });

	app.listen(PORT, () => {
		console.log(`server started on port: ${PORT} `);
	});
};

main().catch((err) => {
	console.log(err);
});
