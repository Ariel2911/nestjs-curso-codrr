import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { UserDTO } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async createUser(body: UserDTO): Promise<UserEntity> {
    try {
      return await this.userRepository.save(body);
    } catch (error) {
      throw new Error(error);
    }
  }
}
