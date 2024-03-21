import { Injectable } from "@nestjs/common";
import { CreateHistoryRequestBodyDTO } from "src/api/history/dto/history.request.dto";
import { ConcertsService } from "src/model/concerts/concerts.service";
import { HistoryEntity } from "src/model/history/entities/history.entity";
import { HistoryService } from "src/model/history/history.service";
import { UserService } from "src/model/user/user.service";


@Injectable()
export class HistoryManagerService {
    constructor(
        private readonly HistoryService: HistoryService,
        private readonly UserService: UserService,
        private readonly ConsertsService: ConcertsService
        ) {}

    public async createHistoryAPI(body: CreateHistoryRequestBodyDTO)  {
        let { uuidConcerts, uuidUser } = body;
        let disbledHistory = await this.HistoryService.getConcertsByUserUUID(uuidUser)
        disbledHistory.forEach((history) => {
            history.action = false;
        });
        await this.HistoryService.saveMany(disbledHistory);

        let getuuidUser = await this.UserService.getByUUID(uuidUser);
        let concertsALL = await this.ConsertsService.getByConcertsUUIDs(uuidConcerts);
        
        let newUserHistory = concertsALL.map((newConcerts) => {
            let newEntity = new HistoryEntity();
            newEntity.create({
                uuidConcerts: newConcerts,
                uuidUser: getuuidUser,
            });
            return newEntity;
        });

        await this.HistoryService.saveMany(newUserHistory);

    }

    public async importHistoryAPI() {
        return this.HistoryService.importHistoryModel();
    }

    public async importHistoryUserAPI(body) {
        return this.HistoryService.importHistoryUserModel(body);
    }
    
}