import { Module } from '@nestjs/common';

import { UserApiModule } from './user/user.module';
import { ConcertsApiModule } from './comcerts/concerts.module';
import { HistoryApiModule } from './history/history.module';

@Module({
    imports: [UserApiModule,ConcertsApiModule,HistoryApiModule],
})
export class ApiModule {}
