import sinon from 'sinon';
import { GetAllUsersUsecase } from '../../src/application/usecase/GetAllUsersUsecase';
import ApiGatewayHttp from '../../src/infra/gateway/ApiGatewayHttp';
import AxiosAdapter from '../../src/infra/http/AxiosAdapter';
import User from '../../src/domain/entity/User';
import { ApiGateway } from '../../src/application/gateway/ApiGateway';

test('Deve recuperar todos os usuários', async () => {
  //const httpClient = new AxiosAdapter();
  const apiGateway: ApiGateway = {
    async getAllUsers(): Promise<User[]> {
      const user = await User.create({
        id: 'cc6df476-f552-4122-9c71-26d390c90326',
        name: 'Patrick Estrela',
        email: 'patrickestrela@gmail.com',
        status: 'enabled',
        role: 'viewer',
        last_activity: 1648487089 * 1000,
      });
      return [user];
    },
  };

  const usecase = new GetAllUsersUsecase(apiGateway);
  const [output] = await usecase.execute();
  expect(output.email).toBe('pa****la@gmail.com');
  expect(output.isActive).toBe(true);
  expect(output.paying).toBe(false);
});
