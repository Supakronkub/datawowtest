import { ConcertsEntity } from 'src/model/concerts/entities/concerts.entity';
import { UserEntity } from 'src/model/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from 'typeorm';

@Entity('history')
export class HistoryEntity {
    @PrimaryGeneratedColumn('uuid')
    uuidHistory: string;
    @Column({ default: true })
    action: boolean;
    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;
    @UpdateDateColumn({ type: 'timestamp' })
    updateAt: Date;

    @ManyToOne(() => UserEntity, (user) => user.uuidUser, {nullable: false})
    @JoinColumn({ name: 'uuidUser' })
    uuidUser: Relation<UserEntity>;

    @ManyToOne(() => ConcertsEntity, (concerts) => concerts.uuidConcerts, {nullable: false})
    @JoinColumn({ name: 'uuidConcerts' })
    uuidConcerts: Relation<ConcertsEntity>;

    public create(params: CreateNewHistory) {
        this.uuidUser = params.uuidUser,
        this.uuidConcerts = params.uuidConcerts
    }
}

export interface CreateNewHistory {
    uuidUser: UserEntity,
    uuidConcerts: ConcertsEntity,
}
