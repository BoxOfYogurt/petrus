import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
	UpdateDateColumn,
} from "typeorm";
import { Subcategory } from "./Subcategory";
import { User } from "./User";

export enum StatusEnum {
	Asap = 0,
	Urgent = 1,
	Important = 2,
	Regular = 3,
	Optional = 4,
}

registerEnumType(StatusEnum, {
	name: "StatusEnum", // this one is mandatory
	description: "STATUS ENUMS: Asap, Urgent, Important, Regular, Optional", // this one is optional
});

@ObjectType()
@Entity({ name: "tasks" })
export class Task extends BaseEntity {
	//=====================| IDENTIFIER / ID |=====================|

	@Field(() => ID)
	@PrimaryGeneratedColumn("uuid")
	readonly_id!: string;

	//=====================| UNIQUE FIELDS |=====================|

	/* USERNAME  */
	@Field()
	@Column("text")
	task_title: string;

	@Field()
	@Column("text")
	task_description: string;

	@Field()
	@Column("text")
	task_tag: string;

	@Field(() => Boolean)
	@Column()
	completed: boolean;

	@Field()
	@Column({
		type: "enum",
		enum: StatusEnum,
		default: StatusEnum.Optional,
		nullable: false,
	})
	status_level: StatusEnum;

	@Field()
	@Column()
	start_date: Date;

	@Field()
	@Column()
	end_date: Date;

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

	@ManyToOne(
		() => Subcategory,
		(subcategory: Subcategory) => subcategory.tasks,
		{
			onDelete: "CASCADE",
		}
	)
	@Field(() => [Subcategory])
	subcategories: Subcategory[];

	//<------ SUBCATEGORIES

	//=====================| TIMESTAMPS |=====================|

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
