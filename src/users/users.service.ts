import { Injectable } from '@nestjs/common';

export type User = {
  id: string;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '1',
      name: 'Bazenga',
      username: 'Kimudu',
      password: 'pass',
    },
    {
      id: '2',
      name: 'Bazuuu',
      username: 'Ramesu',
      password: 'heru',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => {
      return user.username === username;
    });
  }
}
