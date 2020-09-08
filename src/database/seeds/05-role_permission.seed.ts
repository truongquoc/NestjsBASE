import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { RolePermission } from '../../entity/role_permission.entity';

export default class CreateRolePermission implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(RolePermission)
      .values([
        { roleId: 1, permissionId: 1, posession: 'any' },
        { roleId: 1, permissionId: 2, posession: 'any' },
        { roleId: 1, permissionId: 3, posession: 'any' },
        { roleId: 1, permissionId: 4, posession: 'any' },
        { roleId: 1, permissionId: 5, posession: 'any' },
        { roleId: 1, permissionId: 6, posession: 'any' },
        { roleId: 1, permissionId: 7, posession: 'any' },
        { roleId: 1, permissionId: 8, posession: 'any' },
        { roleId: 1, permissionId: 9, posession: 'any' },
        { roleId: 1, permissionId: 10, posession: 'any' },
        { roleId: 1, permissionId: 11, posession: 'any' },
        { roleId: 1, permissionId: 12, posession: 'any' },
        { roleId: 1, permissionId: 13, posession: 'any' },
        { roleId: 1, permissionId: 14, posession: 'any' },
        { roleId: 1, permissionId: 15, posession: 'any' },
        { roleId: 1, permissionId: 16, posession: 'any' },

        // { roleId: 2, permissionId: 2 },
        // { roleId: 2, permissionId: 3, posession: 'own' },
        // { roleId: 2, permissionId: 5 },
        // { roleId: 2, permissionId: 6 },
        // { roleId: 2, permissionId: 7 },
        // { roleId: 2, permissionId: 8 },
        // { roleId: 2, permissionId: 9 },
        // { roleId: 2, permissionId: 10 },
        // { roleId: 2, permissionId: 11 },
        // { roleId: 2, permissionId: 12 },
        // { roleId: 2, permissionId: 13 },
        // { roleId: 2, permissionId: 14 },
        // { roleId: 2, permissionId: 15 },
        // { roleId: 2, permissionId: 16 },
      ])
      .execute();
  }
}
