import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryEntity } from './entities/history.entity';
import { Repository, ReturnDocument } from 'typeorm';
import { CreateHistoryRequestBodyDTO } from 'src/api/history/dto/history.request.dto';
import { CreateHistoryResponseBodyDTO } from 'src/api/history/dto/history.response.dto';

@Injectable()
export class HistoryService {
    constructor(
        @InjectRepository(HistoryEntity)
        private readonly historyRepository: Repository<HistoryEntity>
    ) { }

    public async getConcertsByUserUUID(uuidUser) {
        return await this.historyRepository.find({
            where: {
                uuidUser: uuidUser
            },
            relations: { uuidConcerts: true },
        });
    }

    public async saveMany(history: HistoryEntity[]) {
        return await this.historyRepository.save(history)
    }

    public async importHistoryUserModel(body) {
        return this.historyRepository.find({
            order: {
                uuidConcerts: 'ASC',
            },
            where: {
                uuidUser: body.uuidUser,
                action: true,
            },
            relations: {
                uuidUser: true, uuidConcerts:true
            },
        });
    }
    
    public async importHistoryModel() {
        return this.historyRepository.find({
            order: {
                uuidConcerts: 'ASC',
            },
            where: {
                action: true,
            },
            relations: {
                uuidUser: true, uuidConcerts:true
            },
        });
    }

}
