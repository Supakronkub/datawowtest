import { Controller, Post, HttpCode, Body, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserManagerService } from "src/manager/user-manager/user-manager.service";
import { CreateUserRequestBodyDTO } from "./dto/user.request.dto";
import { CreateUserResponseBodyDTO } from "./dto/user.response.dto";

@Controller()
@ApiTags('userAPI')
export class UserApiController {
    constructor(private readonly userManagerService: UserManagerService) { }

    @Post('/v1/createUser')
    async createUser(
        @Body() body: CreateUserRequestBodyDTO): Promise<CreateUserResponseBodyDTO | string> {
        return await this.userManagerService.createUserAPI(body);
    }
}