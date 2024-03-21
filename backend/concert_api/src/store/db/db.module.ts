import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcertsEntity } from 'src/model/concerts/entities/concerts.entity';
import { HistoryEntity } from 'src/model/history/entities/history.entity';
import { UserEntity,  } from 'src/model/user/entities/user.entity';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(<string>process.env.POSTGRES_POST),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            autoLoadEntities: true,
            synchronize: true,
            entities: [UserEntity, HistoryEntity, ConcertsEntity],
        }),
    ],
})
export class DatabaseModule { }
