import { Resolver, Query } from "type-graphql";
import { Task } from "../entities/Task";

@Resolver()
export class TaskResolver {
	@Query(() => [Task])
	async tasks(): Promise<Task[]> {
		const allTasks = await Task.find();
		return allTasks;
	}
}
