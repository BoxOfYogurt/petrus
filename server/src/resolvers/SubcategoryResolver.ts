import { Subcategory } from "../entities/Subcategory";

import { Resolver, Query } from "type-graphql";

@Resolver()
export class SubcategoryResolver {
	@Query(() => [Subcategory])
	async subcategories(): Promise<Subcategory[]> {
		const allSubcategories = await Subcategory.find();
		return allSubcategories;
	}
}
