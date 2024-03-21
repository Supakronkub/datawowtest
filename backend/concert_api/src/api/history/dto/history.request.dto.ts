import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber, IsString, IsUUID } from 'class-validator';
import { ReadLineOptions } from 'readline';
import { ConcertsEntity } from 'src/model/concerts/entities/concerts.entity';
import { UserEntity } from 'src/model/user/entities/user.entity';
import { Relation } from 'typeorm';

export class CreateHistoryRequestBodyDTO {
    @ApiProperty()
    @IsString()
    uuidUser: string
    @ApiProperty({ isArray: true })
    @IsUUID("4", { each: true })
    uuidConcerts: string[];
}

export class UserHistoryRequestBodyDTO {
    @ApiProperty()
    @IsString()
    uuidUser: string;
}



