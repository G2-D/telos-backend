/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('hotels')
class Hotel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

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
