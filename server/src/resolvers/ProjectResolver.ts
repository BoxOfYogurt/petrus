import { Project } from "../entities/Project";
import { Resolver, Query } from "type-graphql";

@Resolver()
export class ProjectResolver {
	@Query(() => [Project])
	async projects(): Promise<Project[]> {
		const allProjects = await Project.find();
		return allProjects;
	}
}
