import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBookings1597472324758 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bookings',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'hotel_id',
            type: 'int',
          },
          {
            name: 'user_id',
            type: 'int',
          },
          {
            name: 'room_id',
            type: 'int',
          },
          {
            name: 'status',
            type: 'bit',
          },
          {
            name: 'check_in',
            type: 'datetime',
          },
          {
            name: 'check_out',
            type: 'datetime',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bookings');
  }
}
