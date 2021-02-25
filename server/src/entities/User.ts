import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity({ name: "users" })
export class User extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn("uuid")
	readonly_id: string;

	/* FIRSTNAME  
	@Field()
	@Column("text")
	firstname: string;

	/* LASTNAME 
	@Field()
	@Column("text")
	lastname: string;
    */

	/* USERNAME  */
	@Field()
	@Column("text")
	username: string;

	/* PASSWORD  */
	@Column("text")
	password: string;
}
