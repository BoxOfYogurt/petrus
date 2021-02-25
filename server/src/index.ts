import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

/* Entities */

/* Resolvers */
import { UserResolver } from "./resolvers/UserResolver";
import { createConnection } from "typeorm";

const PORT = process.env.PORT || 4000;

(async () => {
	const app = express();

	await createConnection();
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [
				UserResolver,
				// CategoryResolver,
				// ProjectResolver,
				// SubcategoryResolver,
				// TaskResolver,
				// NoteResolver,
			],
			validate: false,
		}),
		context: ({ req, res }) => ({ req, res }),
	});

	apolloServer.applyMiddleware({ app, cors: false });

	app.listen(PORT, () => {
		console.log(`server started on port: ${PORT} `);
	});
})();
