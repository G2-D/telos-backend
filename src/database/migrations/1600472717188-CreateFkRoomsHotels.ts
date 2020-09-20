import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateFkRoomsHotels1600472717188
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'rooms',
      new TableForeignKey({
        name: 'fk_rooms_hotels',
        columnNames: ['hotel_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'hotels',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('rooms', 'fk_rooms_hotels');
  }
}
