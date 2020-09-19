/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import Hotel from './Hotel';

@Entity('rooms')
class Rooms {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  hotel_id: string;

  @ManyToOne(() => Hotel, hotel => hotel.rooms)
  hotel!: Hotel;

  @Column('varchar')
  type: string;

  @Column('int')
  number: number;

  @Column('text')
  description: string;

  @Column('int')
  max_size: number;

  @Column('boolean')
  enabled: boolean;

  @Column('decimal')
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Rooms;
