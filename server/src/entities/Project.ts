import { Field, ID, ObjectType } from "type-graphql";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
	UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category";
import { Subcategory } from "./Subcategory";
import { User } from "./User";

@ObjectType()
@Entity({ name: "projects" })
export class Project extends BaseEntity {
	//=====================| IDENTIFIER / ID |=====================|

	@Field(() => ID)
	@PrimaryGeneratedColumn("uuid")
	readonly_id!: string;

	//=====================| UNIQUE FIELDS |=====================|

	/* USERNAME  */
	@Field()
	@Column("text")
	project_title: string;

	@Field()
	@Column("text")
	project_description: string;

	//=====================| RELATIONS |=====================|
	//<----- USER
	@ManyToOne(() => User, (user: User) => user.projects, {
		lazy: true,
		onDelete: "CASCADE",
		onUpdate: "NO ACTION",
	})
	@JoinColumn({ name: "user_id" })
	@Field(() => User)
	user: User;

	//<----- CATEGORIES
	@ManyToOne(() => Category, (category: Category) => category.projects, {
		lazy: true,
		onDelete: "CASCADE",
		onUpdate: "NO ACTION",
	})
	@JoinColumn({ name: "category_id" })
	@Field(() => Category)
	category: Category;

	//------> SUBCATEGORIES

	@OneToMany(
		() => Subcategory,
		(subcategory: Subcategory) => subcategory.project,
		{
			cascade: true,
			lazy: true,
		}
	)
	@Field(() => [Subcategory])
	subcategories: Subcategory[];

	//=====================| TIMESTAMPS |=====================|

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
