import { EntityRepository, Repository } from 'typeorm';
import { Category } from '../../entity/category.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    
}
