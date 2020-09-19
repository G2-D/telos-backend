import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateFkBookingsHotels1600473120683
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'bookings',
      new TableForeignKey({
        name: 'fk_bookings_hotels',
        columnNames: ['hotel_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'hotels',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('bookings', 'fk_bookings_hotels');
  }
}
