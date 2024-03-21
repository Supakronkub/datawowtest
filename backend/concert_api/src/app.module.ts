import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DatabaseModule } from './store/db/db.module';

@Module({
    imports: [ApiModule, DatabaseModule],
})
export class AppModule {}
