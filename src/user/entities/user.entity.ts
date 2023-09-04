import { Appointment } from 'src/appointment/entities/appointment.entity';
import { ROLES } from 'src/constants/rol.enum';
import { Notice } from 'src/notice/entities/notice.entity';
import { Offering } from 'src/offering/entities/offering.entity';
import { Review } from 'src/review/entities/review.entity';
import { BaseEntity } from 'src/share/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
@Entity()
export class User extends BaseEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ select: false })
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cellphone: string;

  @Column({ default: 'USER' })
  rol: ROLES;

  @Column({ default: '' })
  image: string;

  @OneToMany(() => Offering, (offering) => offering.user)
  offerings: Offering[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @OneToMany(() => Notice, (notice) => notice.user)
  notices: Notice[];

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appoinments: Appointment[];
}
