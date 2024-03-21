import { ApiProperty } from '@nestjs/swagger';

export class CreateUserResponseBodyDTO {
    @ApiProperty()
    nameUser: string;
}