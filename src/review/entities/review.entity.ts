import { BaseEntity } from 'src/share/base.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Review extends BaseEntity {
  @Column()
  image: string;
  @Column()
  mesage: string;
  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: 'userId' })
  user: User;
}
