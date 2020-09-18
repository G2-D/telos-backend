/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {

  @PrimaryColumn()
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  lastname: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  avatar: string;

  @Column('varchar')
  phone: string;

  @Column('bit')
  admin: string;

  @Column('bit')
  enable: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
