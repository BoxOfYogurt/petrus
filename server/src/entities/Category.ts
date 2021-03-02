import { Field, ID, ObjectType } from "type-graphql";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Project } from "./Project";

@ObjectType()
@Entity({ name: "categories" })
export class Category extends BaseEntity {
	//=====================| IDENTIFIER / ID |=====================|

	@Field(() => ID)
	@PrimaryGeneratedColumn("uuid")
	readonly_id!: string;

	//=====================| UNIQUE FIELDS |=====================|

	//COLOR CODE
	@Field()
	@Column({ nullable: true })
	color_code: string;

	//CATEGORY TITLE
	@Field()
	@Column({ nullable: false })
	category_title: string;

	//=====================| RELATIONS |=====================|

	// USER
	@ManyToOne(() => User, (user: User) => user.categories, {
		lazy: true,
		onDelete: "CASCADE",
		onUpdate: "NO ACTION",
	})
	@JoinColumn({ name: "user_id" })
	@Field(() => User)
	user: User;

	//PROJECTS
	@OneToMany(() => Project, (project: Project) => project.category, {
		cascade: true,
		lazy: true,
	})
	@Field(() => [Project])
	projects: Project[];

	//=====================| TIMESTAMPS |=====================|

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@CreateDateColumn()
	updatedAt: Date;
}
