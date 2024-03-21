import { Controller, Post, HttpCode, Body, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateConcertsRequestBodyDTO, DisableConcertsRequestBodyDTO } from "./dto/concerts.request.dto";
import { CreateConcertsResponseBodyDTO } from "./dto/concerts.response.dto";
import { ConcertsManagerService } from "src/manager/concerts-manager/concerts-manager.service";

@Controller()
@ApiTags('concertsAPI')
export class ConcertsApiController {
    constructor(private readonly concertsManagerService: ConcertsManagerService) { }

    @Post('/v1/createConcerts')
    async createConcerts(
        @Body() body: CreateConcertsRequestBodyDTO): Promise<CreateConcertsResponseBodyDTO | string> {
        return await this.concertsManagerService.createConcertsAPI(body);
    }

    @Get('/v1/importConcerts')
    async importConcerts() {
        return await this.concertsManagerService.importConcertsAPI();
    }

    @Post('/v1/disableConcerts')
    async disableConcerts(
        @Body() body: DisableConcertsRequestBodyDTO) {
        return await this.concertsManagerService.disableConcertsAPI(body);
    }
}