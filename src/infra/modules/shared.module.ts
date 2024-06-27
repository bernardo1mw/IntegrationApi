import { Global, Module } from '@nestjs/common';
import { sharedExports, sharedProviders } from '../providers/shared.providers';

@Global()
@Module({
  controllers: [],
  providers: [...sharedProviders],
  exports: [...sharedExports],
})
export class SharedModule {}
