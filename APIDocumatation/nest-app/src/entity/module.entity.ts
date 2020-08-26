import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { PermissionsEntity } from './permission.entity';
@Entity('modules')
export class ModulesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  module: string;
  @OneToMany(
    type => PermissionsEntity,
    permission => permission.module,
  )
  permissions: PermissionsEntity[];
}
