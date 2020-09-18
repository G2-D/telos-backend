/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('hotels')
class Hotel {
  @PrimaryColumn()
  id: number;

  @Column('int')
  user_id: number;

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
