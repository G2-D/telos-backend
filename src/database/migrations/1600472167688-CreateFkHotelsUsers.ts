import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateFkHotelsUsers1600472167688
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'hotels',
      new TableForeignKey({
        name: 'fk_hotels_users',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('hotels', 'fk_hotels_users');
  }
}
