import { Module } from "@nestjs/common";
import { HistoryApiController } from "./history.controller";
import { HistoryManagerModule } from "src/manager/history-manager/history-manager.module";


@Module({
    imports: [HistoryManagerModule],
    controllers: [HistoryApiController],
})
export class HistoryApiModule {}