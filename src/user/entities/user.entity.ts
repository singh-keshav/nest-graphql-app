import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Name' })
  @Column({ length: 100, type: 'varchar' })
  name: string;
}
