import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { userProviders } from '../providers/user.providers';

@Module({
  controllers: [UserController],
  providers: [...userProviders],
  exports: [],
})
export class UserModule {}
