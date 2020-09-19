/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Hotel from './Hotel';

@Entity('rooms')
class Rooms {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Hotel)
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;

  @Column('uuid')
  hotel_id: string;

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
