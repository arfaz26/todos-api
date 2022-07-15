import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(public todosService: TodosService) {}

  @Get()
  getAll() {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body() body: CreateTodoDto) {
    return this.todosService.create(body.task);
  }

  @Get('/:id')
  async get(@Param('id') id: string) {
    const task = await this.todosService.findOne(id);
    if (!task) {
      throw new NotFoundException('Task Not found');
    }
    return task;
  }
}
