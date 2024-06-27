import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './modules/shared.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), SharedModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
