import { Injectable } from "@nestjs/common";
import { CreateConcertsRequestBodyDTO, DisableConcertsRequestBodyDTO } from "src/api/comcerts/dto/concerts.request.dto";
import { CreateConcertsResponseBodyDTO } from "src/api/comcerts/dto/concerts.response.dto";
import { ConcertsService } from "src/model/concerts/concerts.service";

@Injectable()
export class ConcertsManagerService {
    constructor(private readonly ConcertsService: ConcertsService) { }

    public async createConcertsAPI(body: CreateConcertsRequestBodyDTO): Promise<CreateConcertsResponseBodyDTO | string> {
        return await this.ConcertsService.createConcertsModel(body);
    }

    public async importConcertsAPI() {
        const allConcerts = await this.ConcertsService.importConcertsModel();
        const activeConcerts = allConcerts.map((concerts) => ({
            uuidConcert: concerts.uuidConcerts,
            concertName: concerts.nameConcert,
            createBy: concerts.uuidUser,
        }));
        return activeConcerts;
    }

    public async disableConcertsAPI(Body: DisableConcertsRequestBodyDTO) {
        let { uuidConcerts } = Body
        let disbledConcerts = await this.ConcertsService.getConcertsByUUID(uuidConcerts);
        disbledConcerts.forEach((concerts) => {
            concerts.isActive = false;
        });
        await this.ConcertsService.saveMany(disbledConcerts);
    }
}