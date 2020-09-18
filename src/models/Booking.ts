/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bookings')
class Booking {
  @PrimaryColumn()
  id: number;

  @Column('int')
  hotel_id: number;

  @Column('int')
  user_id: number;

  @Column('int')
  room_id: number;

  @Column('bit')
  status: boolean;

  @Column('datetime')
  check_in: Date;

  @Column('datetime')
  check_out: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Booking;
