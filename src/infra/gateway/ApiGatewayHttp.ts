import { ApiGateway } from '../../application/gateway/ApiGateway';
import User from '../../domain/entity/User';
import { HttpClient } from '../http/HttpClient';

export default class ApiGatewayHttp implements ApiGateway {
  constructor(readonly httpClient: HttpClient) {}

  async getAllUsers(): Promise<User[]> {
    const users: User[] = [];
    const response = await this.httpClient.get(process.env.API_URL + '/users');
    for (const userData of response) {
      const user = await User.create({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        last_activity: userData.last_activity * 1000,
        role: userData.role,
        status: userData.status,
      });
      users.push(user);
    }
    return users;
  }
}
