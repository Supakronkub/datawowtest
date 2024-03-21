import { Injectable } from "@nestjs/common";
import { CreateUserRequestBodyDTO } from "src/api/user/dto/user.request.dto";
import { CreateUserResponseBodyDTO } from "src/api/user/dto/user.response.dto";
import { UserService } from "src/model/user/user.service";

@Injectable()
export class UserManagerService {
    constructor(private readonly UserService: UserService) {}

    public async createUserAPI(body: CreateUserRequestBodyDTO): Promise<CreateUserResponseBodyDTO | string> {
        return await this.UserService.createUserModel(body);
    }
}