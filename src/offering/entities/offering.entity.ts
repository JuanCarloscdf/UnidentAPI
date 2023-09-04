import { BaseEntity } from 'src/share/base.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Offering extends BaseEntity {
  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  message: string;

  @ManyToOne(() => User, (user) => user.offerings)
  user: User;
}
