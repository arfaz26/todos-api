import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { TodosModule } from './todos/todos.module';

async function bootstrap() {
  const app = await NestFactory.create(TodosModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
