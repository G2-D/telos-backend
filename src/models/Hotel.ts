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
	id: string;

	@Column('int')
	user_id: string;
  
	@Column('varchar')
	name: string;
  
	@Column('int')
	stars: string;
  
	@Column('text')
	description: string;
  
	@Column('varchar')
	address: string;
  
	@Column('varchar')
	city: string;
  
	@Column('varchar')
	state: string;

	@Column('varchar')
	zipcode: string;

	@Column('varchar')
	phone: string;
  
	@Column('bit')
	coffe_free: string;
  
	@Column('varchar')
	image_url: string;
  
	@CreateDateColumn()
	created_at: Date;
  
	@UpdateDateColumn()
	updated_at: Date;
  }
  
  export default Hotel;
  