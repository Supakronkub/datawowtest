import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserResponseBodyDTO } from 'src/api/user/dto/user.response.dto';
import { CreateUserRequestBodyDTO } from 'src/api/user/dto/user.request.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    public async createUserModel(body: CreateUserRequestBodyDTO): Promise<CreateUserResponseBodyDTO | string> {
        try {
            const newUser = this.userRepository.create(body);
            await this.userRepository.save(newUser);
            return 'User created successfully';
        } catch (error) {
            console.error('Error creating user:', error);
            return 'Failed to create user';
        }
    }

    public getByUUID(uuidUser: string): Promise<UserEntity> {
        return this.userRepository.findOneBy({ uuidUser });
    }
}
