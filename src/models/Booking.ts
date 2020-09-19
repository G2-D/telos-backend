/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bookings')
class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  hotel_id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  room_id: string;

  @Column('bit')
  status: boolean;

  @Column('timestamp with time zone')
  check_in: Date;

  @Column('timestamp with time zone')
  check_out: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Booking;
