import { Controller, Get, Inject } from '@nestjs/common';
import { GetAllUsersUsecase } from '../../application/usecase/GetAllUsersUsecase';

@Controller('users')
export class UserController {
  constructor(
    @Inject('GetAllUsersUsecase')
    private readonly getAllUsersUsecase: GetAllUsersUsecase,
  ) {}

  @Get()
  async getUsers(): Promise<any> {
    return this.getAllUsersUsecase.execute();
  }
}
