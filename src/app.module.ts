import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cat.module'

@Module({
  imports: [AppModule, CatsModule]
})

export class AppModule {}
