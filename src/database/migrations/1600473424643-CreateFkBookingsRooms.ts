import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateFkBookingsRooms1600473424643
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'bookings',
      new TableForeignKey({
        name: 'fk_bookings_rooms',
        columnNames: ['room_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rooms',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('bookings', 'fk_bookings_rooms');
  }
}
