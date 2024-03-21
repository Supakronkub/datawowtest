import { Module } from "@nestjs/common";
import { UserApiController } from "./user.controller";
import { UserManagerModule } from "src/manager/user-manager/user-manager.module";

@Module({
    imports: [UserManagerModule],
    controllers: [UserApiController],
})
export class UserApiModule {}