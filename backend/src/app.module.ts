import { Module } from '@nestjs/common';
import { GistsModule } from './gists/gists.module';

@Module({
  imports: [GistsModule]
})
export class AppModule {}
