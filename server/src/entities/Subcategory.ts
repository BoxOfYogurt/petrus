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
import { Project } from "./Project";
import { Task } from "./Task";
import { User } from "./User";

@ObjectType()
@Entity({ name: "subcategories" })
export class Subcategory extends BaseEntity {
	//=====================| IDENTIFIER / ID |=====================|

	@Field(() => ID)
	@PrimaryGeneratedColumn("uuid")
	readonly_id: string;

	//=====================| UNIQUE FIELDS |=====================|

	@Field()
	@Column({ unique: false, nullable: false })
	subcategory_title!: string;

	//=====================| RELATIONS |=====================|

	//<------ USER
	@ManyToOne(() => User, (user: User) => user.subcategories, {
		lazy: true,
		onDelete: "CASCADE",
		onUpdate: "NO ACTION",
	})
	@JoinColumn({ name: "user_id" })
	@Field(() => User)
	user: User;

	//<----- PROJECTS
	@ManyToOne(() => Project, (project: Project) => project.subcategories, {
		lazy: true,
		onDelete: "CASCADE",
		onUpdate: "NO ACTION",
	})
	@JoinColumn({ name: "project_id" })
	@Field(() => Project)
	project: Project;

	//-----> TASKS

	@OneToMany(() => Task, (task: Task) => task.subcategories, {
		cascade: true,
		lazy: true,
	})
	@Field(() => [Task])
	tasks: Task[];

	//=====================| TIMESTAMPS |=====================|

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
