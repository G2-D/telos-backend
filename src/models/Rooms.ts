/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('rooms')
class Rooms {
  @PrimaryColumn()
  id: number;

  @Column('int')
  hotel_id: number;

  @Column('varchar')
  type: string;

  @Column('int')
  number: number;

  @Column('text')
  description: string;

  @Column('int')
  max_size: number;

  @Column('bit')
  enabled: boolean;

  @Column('decimal')
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Rooms;
