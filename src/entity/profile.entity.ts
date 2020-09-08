import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Base } from './base.entity';
import { IsOptional, IsString, MaxLength, IsIn } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { User } from './user.entity';
import { Experience } from '../common/enums/experience.enum';
import { enumToArray } from '../core/utils/helper';
import { ApiProperty } from '@nestjs/swagger';
const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('profiles')
export class Profile extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional({ groups: [CREATE, UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true, default: null })
  profileUrl: string;

  @IsOptional({ groups: [CREATE, UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true, default: null })
  pageURL: string;

  @IsOptional({ groups: [CREATE, UPDATE] })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true, default: null })
  cvURL: string;

  @ApiProperty({ example: '1' })
  @IsOptional({ groups: [CREATE, UPDATE] })
  @IsIn(enumToArray(Experience))
  @Column({ type: 'enum', enum: Experience, nullable: true })
  experience: string;
  /** Relation to User */

  @OneToOne(
    type => User,
    user => user.address,
  )
  user: User;
}
