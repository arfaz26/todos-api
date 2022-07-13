import { NestFactory } from '@nestjs/core';
import { TodosModule } from './todos/todos.module';

async function bootstrap() {
  const app = await NestFactory.create(TodosModule);
  await app.listen(3000);
}
bootstrap();