import Email from '../value-objects/Email';

export default class User {
  private constructor(
    readonly id: string,
    readonly name: string,
    readonly email: Email,
    readonly last_activity: Date,
    readonly paying: boolean,
    readonly isActive: boolean,
  ) {}

  static async create(input: CreateInput) {
    let paying: boolean;
    let isActive: boolean;

    if (input.status == 'disabled') {
      paying = false;
      isActive = false;
    } else if (input.role == 'editor' || input.role == 'admin') {
      paying = true;
      isActive = true;
    } else {
      paying = false;
      isActive = true;
    }

    return new User(
      input.id,
      input.name,
      new Email(input.email),
      new Date(input.last_activity),
      paying,
      isActive,
    );
  }

  getState(): Output {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      last_activity: this.last_activity,
      paying: this.paying,
      isActive: this.isActive,
    };
  }
}

export type CreateInput = {
  id: string;
  name: string;
  email: string;
  last_activity: number;
  role: 'viewer' | 'system' | 'editor' | 'admin';
  status: 'enabled' | 'disabled';
};

export type Output = {
  id: string;
  name: string;
  email: Email;
  last_activity: Date;
  paying: boolean;
  isActive: boolean;
};
