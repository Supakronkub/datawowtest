import { Module } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcertsEntity } from './entities/concerts.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ConcertsEntity])],
    providers: [ConcertsService],
    exports: [ConcertsService],
})
export class ConcertsModule {}
