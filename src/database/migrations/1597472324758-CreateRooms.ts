import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateRooms1597472324758 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rooms',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true
		  },
		  {
            name: 'hotel_id',
            type: 'int',
		  },
          {
            name: 'type',
            type: 'varchar',
		  },
		  {
            name: 'number',
            type: 'int'
          },
          {
            name: 'description',
            type: 'text'
		  },
          {
            name: 'max_size',
            type: 'int',
		  },
		  {
            name: 'enabled',
            type: 'bit',
		  },
		  {
            name: 'price',
            type: 'decimal'
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
    await queryRunner.dropTable('rooms');
  }
}