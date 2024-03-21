import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConcertsEntity } from './entities/concerts.entity';
import { In, Repository } from 'typeorm';
import { CreateConcertsRequestBodyDTO } from 'src/api/comcerts/dto/concerts.request.dto';
import { CreateConcertsResponseBodyDTO } from 'src/api/comcerts/dto/concerts.response.dto';

@Injectable()
export class ConcertsService {
    constructor(
        @InjectRepository(ConcertsEntity)
        private readonly concertsRepository: Repository<ConcertsEntity>
    ) { }

    public async createConcertsModel(body: CreateConcertsRequestBodyDTO): Promise<CreateConcertsResponseBodyDTO | string> {
        try {
            const newConcerts = this.concertsRepository.create(body);
            await this.concertsRepository.save(newConcerts);
            return 'Concerts created successfully';
        } catch (error) {
            console.error('Error creating Concerts:', error);
            return 'Failed to create Concerts';
        }
    }

    public async importConcertsModel() {
        return this.concertsRepository.find({
            order: {
                uuidConcerts: 'ASC',
            },
            where: {
                isActive: true,
            },
            relations: {
                uuidUser: true,
            },
        });
    }

    public async getConcertsByUUID(uuidConcerts: string) {
        return await this.concertsRepository.find({
            where: {
                uuidConcerts: uuidConcerts
            },
            relations: { uuidUser: true },
        });
    }

    public async saveMany(concerts: ConcertsEntity[]) {
        return await this.concertsRepository.save(concerts)
    }

    public async getByConcertsUUIDs(uuidConcerts: string[]) {
        return await this.concertsRepository.find({
            where: {
                uuidConcerts: In(uuidConcerts),
            },
            relations: {
                uuidUser: true
            },
        });
    }
}
