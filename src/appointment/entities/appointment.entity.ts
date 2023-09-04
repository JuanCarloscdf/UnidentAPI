import { BaseEntity } from 'src/share/base.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Appointment extends BaseEntity {
  @Column()
  date: Date;
  @Column()
  evaluation: string;
  @Column()
  hour: string;
  @Column()
  paid: number;
  @Column()
  total: number;
  @Column()
  apptNumber: number;
  @ManyToOne(() => User, (user) => user.appoinments)
  @JoinColumn({ name: 'userId' })
  user: User;
}
