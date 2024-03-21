import { HistoryEntity } from 'src/model/history/entities/history.entity';
import { UserEntity } from 'src/model/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from 'typeorm';

@Entity('concerts')
export class ConcertsEntity {
    @PrimaryGeneratedColumn('uuid')
    uuidConcerts: string;
    @Column({ default: '' })
    nameConcert: string;
    @Column({ default: '' })
    description: string;
    @Column("integer")
    totalseat: number;
    @Column({ default: true })
    isActive: boolean;
    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;
    @UpdateDateColumn({ type: 'timestamp' })
    updateAt: Date;

    @ManyToOne(() => UserEntity, (user) => user.uuidUser, {nullable: false})
    @JoinColumn({ name: 'createBy' })
    uuidUser: Relation<UserEntity>;

    @OneToMany(() => HistoryEntity, (history) => history.uuidConcerts, { cascade: true, onDelete: "CASCADE" })
    uuidHistory: Relation<HistoryEntity>
    
}
