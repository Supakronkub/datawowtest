import { Module } from "@nestjs/common";
import { UserModule } from "src/model/user/user.module";
import { UserManagerService } from "./user-manager.service";

@Module({
    imports: [UserModule],
    providers: [UserManagerService],
    exports: [UserManagerService],
})
export class UserManagerModule {}