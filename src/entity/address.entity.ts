import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToOne } from 'typeorm';
import { Base } from './base.entity';
import { CrudValidationGroups } from '@nestjsx/crud';
const { CREATE, UPDATE } = CrudValidationGroups;
import { IsOptional, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';
@Entity('addresses')
export class Address extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Đà Nẵng' })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  city: string;

  @ApiProperty({ example: 'Hải Châu' })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  district: string;

  @ApiProperty({ example: '123 Nguyễn Văn Linh' })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  street: string;

  @ApiProperty({ example: ' ' })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ example: ' ' })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ type: 'text' })
  field: string;

  /** Relation
   * Address to User
   */
  @OneToOne(
    type => User,
    user => user.address,
  )
  user: User;
}
