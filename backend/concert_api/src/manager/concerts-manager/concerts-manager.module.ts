import { Module } from "@nestjs/common";
import { ConcertsManagerService } from "./concerts-manager.service";
import { ConcertsModule } from "src/model/concerts/concerts.module";

@Module({
    imports: [ConcertsModule],
    providers: [ConcertsManagerService],
    exports: [ConcertsManagerService],
})
export class ConcertsManagerModule {}