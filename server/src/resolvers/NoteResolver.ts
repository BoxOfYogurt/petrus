import { Note } from "../entities/Note";
import { Resolver, Query } from "type-graphql";

@Resolver()
export class NoteResolver {
	@Query(() => [Note])
	async notes(): Promise<Note[]> {
		const allNotes = await Note.find();
		return allNotes;
	}
}
