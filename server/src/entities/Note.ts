import { Field, ID, ObjectType } from "type-graphql";
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

import { User } from "./User";

@ObjectType()
@Entity({ name: "notes" })
export class Note extends BaseEntity {
	//=====================| IDENTIFIER / ID |=====================|

	@Field(() => ID)
	@PrimaryGeneratedColumn("uuid")
	readonly_id!: string;

	//=====================| UNIQUE FIELDS |=====================|

	/* USERNAME  */
	@Field()
	@Column("text")
	note_text: string;

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

	//=====================| TIMESTAMPS |=====================|

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date;

	@Field(() => String)
	@UpdateDateColumn()
	updatedAt: Date;
}
