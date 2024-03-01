import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  create(createUserInput: CreateUserInput) {
    return this.userRepository.save(createUserInput);
  }

  findAll(limit: number, offset: number) {
    return this.userRepository.find({ skip: offset, take: limit });
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.userRepository.findOne({ where: { id } });
    user.name = updateUserInput.name;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
