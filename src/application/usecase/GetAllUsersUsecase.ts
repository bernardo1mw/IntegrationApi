import { Usecase } from 'src/application/usecase/Usecase';
import { ApiGateway } from '../gateway/ApiGateway';

export class GetAllUsersUsecase implements Usecase {
  constructor(private readonly apiGateway: ApiGateway) {}

  async execute(): Promise<any> {
    const users = await this.apiGateway.getAllUsers();
    return users.map((user) => {
      return {
        id: user.getState().id,
        name: user.getState().name,
        email: user.getState().email.getObfuscatedEmail(),
        last_activity: user.getState().last_activity.toISOString(),
        paying: user.getState().paying,
        isActive: user.getState().isActive,
      };
    });
  }
}
