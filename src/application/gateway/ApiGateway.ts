import User from '../../domain/entity/User';

export interface ApiGateway {
  getAllUsers(): Promise<User[]>;
}
