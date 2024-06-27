import { FactoryProvider, Provider } from '@nestjs/common';
import { ApiGateway } from '../../application/gateway/ApiGateway';
import { GetAllUsersUsecase } from '../../application/usecase/GetAllUsersUsecase';

const getUsersUsecaseProvider: FactoryProvider = {
  provide: 'GetAllUsersUsecase',
  useFactory: (apiGateway: ApiGateway) => {
    return new GetAllUsersUsecase(apiGateway);
  },
  inject: ['ApiGateway'],
};

export const userProviders: Provider[] = [getUsersUsecaseProvider];
