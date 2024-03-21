import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserRequestBodyDTO {
    @ApiProperty()
    @IsString()
    nameUser: string;
}