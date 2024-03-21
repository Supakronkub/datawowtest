import { Module } from "@nestjs/common";
import { HistoryModule } from "src/model/history/history.module";
import { HistoryManagerService } from "./history-manager.service";
import { ConcertsModule } from "src/model/concerts/concerts.module";
import { UserModule } from "src/model/user/user.module";


@Module({
    imports: [HistoryModule, ConcertsModule, UserModule],
    providers: [HistoryManagerService],
    exports: [HistoryManagerService],
})
export class HistoryManagerModule {}