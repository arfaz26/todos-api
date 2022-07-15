import { Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(public todosRepository: TodosRepository) {}

  async findOne(id: string) {
    return this.todosRepository.findOne(id);
  }

  async findAll() {
    return this.todosRepository.findAll();
  }

  async create(task: string) {
    return this.todosRepository.create(task);
  }
}
