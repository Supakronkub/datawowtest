import { Controller, Post, HttpCode, Body, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateHistoryRequestBodyDTO, UserHistoryRequestBodyDTO } from "./dto/history.request.dto";
import { HistoryManagerService } from "src/manager/history-manager/history-manager.service";


@Controller()
@ApiTags('historyAPI')
export class HistoryApiController {
    constructor(private readonly historyManagerService: HistoryManagerService) { }

    @Post('/v1/createHistory')
    public async createHistory(
        @Body() body: CreateHistoryRequestBodyDTO) {
        return await this.historyManagerService.createHistoryAPI(body);
    }

    @Get('/v1/importHistory')
    async importHistory() {
        return await this.historyManagerService.importHistoryAPI();
    }

    @Get('/v1/importHistoryByUser')
    async importHistoryUser(
        @Body() body: UserHistoryRequestBodyDTO) {
        return await this.historyManagerService.importHistoryUserAPI(body);
    }
}