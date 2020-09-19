/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import User from './User';
import Room from './Room';

@Entity('hotels')
class Hotel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @ManyToOne(() => User, user => user.hotels)
  admin!: User;

  @OneToMany(() => Room, room => room.hotel)
  rooms!: Room[];

  @Column('varchar')
  name: string;

  @Column('int')
  stars: number;

  @Column('text')
  description: string;

  @Column('varchar')
  address: string;

  @Column('varchar')
  city: string;

  @Column('varchar')
  state: string;

  @Column('int')
  zipcode: number;

  @Column('varchar')
  phone: string;

  @Column('bit')
  coffe_free: boolean;

  @Column('varchar')
  image_url: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Hotel;
