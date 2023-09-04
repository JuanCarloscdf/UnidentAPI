import { BaseEntity } from 'src/share/base.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Notice extends BaseEntity {
  @Column()
  message: string;
  @ManyToOne(() => User, (user) => user.notices)
  user: User;
}
