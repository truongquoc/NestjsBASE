import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Base } from './base.entity';
import { IsOptional, IsString, IsDateString } from 'class-validator';
import { User } from './user.entity';
const { CREATE, UPDATE } = CrudValidationGroups;
@Entity('educations')
export class EducationsEntity extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  name: string;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true })
  major: string;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsDateString()
  @Column({ type: 'date', nullable: true })
  graduated: Date;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(
    type => User,
    user => user,
  )
  user: User;
}
