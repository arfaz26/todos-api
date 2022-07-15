import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class TodosRepository {
  async findOne(id: string) {
    const contents = await readFile('todos.json', 'utf-8');
    const todos = JSON.parse(contents);
    return todos[id];
  }

  async findAll() {
    const contents = await readFile('todos.json', 'utf-8');
    return JSON.parse(contents);
  }

  async create(task: string) {
    const contents = await readFile('todos.json', 'utf-8');
    const todos = JSON.parse(contents);
    const id = Math.floor(Math.random() * 9999);
    todos[id] = { id, task };

    await writeFile('todos.json', JSON.stringify(todos));
  }
}
