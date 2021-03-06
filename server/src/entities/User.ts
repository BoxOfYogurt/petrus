import { Field, ID, ObjectType } from "type-graphql";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category";
import { Note } from "./Note";
import { Project } from "./Project";
import { Subcategory } from "./Subcategory";
import { Task } from "./Task";

@ObjectType()
@Entity({ name: "users" })
export class User extends BaseEntity {
	//=====================| IDENTIFIER / ID |=====================|

	@Field(() => ID)
	@PrimaryGeneratedColumn("uuid")
	readonly_id: string;

	//=====================| UNIQUE FIELDS |=====================|

	/* USERNAME  */
	@Field()
	@Column("text")
	username: string;

	/* PASSWORD  */
	@Column("text")
	password: string;

	//=====================| RELATIONS |=====================|

	@OneToMany(() => Category, (category: Category) => category.user, {
		cascade: true,
		lazy: true,
	})
	@Field(() => [Category])
	categories: Category[];

	@OneToMany(() => Project, (project: Project) => project.user, {
		cascade: true,
		lazy: true,
	})
	@Field(() => [Project])
	projects: Project[];

	@OneToMany(
		() => Subcategory,
		(subcategory: Subcategory) => subcategory.user,
		{
			cascade: true,
			lazy: true,
		}
	)
	@Field(() => [Subcategory])
	subcategories: Subcategory[];

	@OneToMany(() => Task, (task: Task) => task.user, {
		cascade: true,
		lazy: true,
	})
	@Field(() => [Task])
	tasks: Task[];

	@OneToMany(() => Note, (note: Note) => note.user, {
		cascade: true,
		lazy: true,
	})
	@Field(() => [Note])
	notes: Note[];

	//=====================| TIMESTAMPS |=====================|

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
