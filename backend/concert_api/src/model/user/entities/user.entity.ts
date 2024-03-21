import { ConcertsEntity } from 'src/model/concerts/entities/concerts.entity';
import { HistoryEntity } from 'src/model/history/entities/history.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    uuidUser: string;
    @Column({ default: '' })
    nameUser: string;
    @Column({ default: true })
    isActive: boolean;
    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;
    @UpdateDateColumn({ type: 'timestamp' })
    updateAt: Date;

    @OneToMany(() => HistoryEntity, (history) => history.uuidUser, { cascade: true })
    uuidHistory: Relation<HistoryEntity>

    @OneToMany(() => ConcertsEntity, (concerts) => concerts.uuidUser, { cascade: true })
    uuidConcerts: Relation<ConcertsEntity>
}
