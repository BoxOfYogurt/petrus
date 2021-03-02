import { Resolver, Query } from "type-graphql";
import { Category } from "../entities/Category";

@Resolver()
export class CategoryResolver {
	@Query(() => [Category])
	async categories(): Promise<Category[]> {
		const allCategories = await Category.find();
		return allCategories;
	}
}
