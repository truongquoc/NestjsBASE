import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Base } from './base.entity';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { User } from './user.entity';
import { experienceEnum } from '../common/enums/experience.enum';
const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('profiles')
export class Profile extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @MaxLength(32, { always: true })
  @Column({ type: 'varchar', length: 32, nullable: true, default: null })
  profile_url: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @MaxLength(32, { always: true })
  @Column({ type: 'varchar', length: 32, nullable: true, default: null })
  page_url: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @MaxLength(32, { always: true })
  @Column({ type: 'varchar', length: 32, nullable: true, default: null })
  cv_url: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ type: 'varchar', length: 256, nullable: true, default: null })
  address: string;

  @Column({ type: 'enum', enum: experienceEnum, default: 0 })
  experience: string;

  // @IsOptional({ always: true })
  // @Column({ type: 'date', length: 256, nullable: true, default: null })
  // eduaction: Date;

  /** Relation to User */

  @OneToOne(
    type => User,
    user => user.address,
  )
  user: User;
}
