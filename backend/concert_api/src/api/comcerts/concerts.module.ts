import { Module } from "@nestjs/common";
import { ConcertsApiController } from "./concerts.controller";
import { ConcertsManagerModule } from "src/manager/concerts-manager/concerts-manager.module";

@Module({
    imports: [ConcertsManagerModule],
    controllers: [ConcertsApiController],
})
export class ConcertsApiModule {}