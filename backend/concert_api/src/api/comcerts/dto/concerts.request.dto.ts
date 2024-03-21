import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { UserEntity } from 'src/model/user/entities/user.entity';
import { Relation } from 'typeorm';

export class CreateConcertsRequestBodyDTO {
    @ApiProperty()
    @IsString()
    nameConcert: string;
    @ApiProperty()
    @IsString()
    description: string;
    @ApiProperty()
    @IsNumber()
    totalseat: number;
    @ApiProperty()
    @IsString()
    uuidUser: Relation<UserEntity>
}

export class DisableConcertsRequestBodyDTO {
    @ApiProperty()
    @IsString()
    uuidConcerts: string;
}