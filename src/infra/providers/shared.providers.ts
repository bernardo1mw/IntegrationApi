import { ClassProvider, FactoryProvider, Provider } from '@nestjs/common';
import ApiGatewayHttp from '../gateway/ApiGatewayHttp';
import AxiosAdapter from '../http/AxiosAdapter';
import { HttpClient } from '../http/HttpClient';
import { ApiGateway } from '../../application/gateway/ApiGateway';

const httpClientProvider: ClassProvider<HttpClient> = {
  provide: 'HttpClient',
  useClass: AxiosAdapter,
};

const apiGatewayProvider: FactoryProvider<ApiGateway> = {
  provide: 'ApiGateway',
  useFactory: (httpClient: HttpClient) => {
    return new ApiGatewayHttp(httpClient);
  },
  inject: ['HttpClient'],
};

export const sharedProviders: Provider[] = [
  httpClientProvider,
  apiGatewayProvider,
];

export const sharedExports: Provider[] = [
  httpClientProvider,
  apiGatewayProvider,
];
