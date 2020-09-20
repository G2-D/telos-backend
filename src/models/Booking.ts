/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Hotel from './Hotel';
import User from './User';
import Room from './Room';

@Entity('bookings')
class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Hotel)
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;

  @Column('uuid')
  hotel_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('uuid')
  user_id: string;

  @OneToOne(() => Room)
  @JoinColumn({ name: 'room_id' })
  Room: Room;

  @Column('uuid')
  room_id: string;

  @Column('boolean')
  status: boolean;

  @Column('timestamp with time zone')
  check_in: Date;

  @Column('timestamp with time zone')
  check_out: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Booking;
