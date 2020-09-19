import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateFkBookingsUsers1600473271616
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'bookings',
      new TableForeignKey({
        name: 'fk_bookings_users',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('bookings', 'fk_bookings_users');
  }
}
