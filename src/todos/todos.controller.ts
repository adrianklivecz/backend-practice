import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  findAllTodos(): Todo[] {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodo(@Param('id') id): Todo {
    return this.todoService.findTodo(id);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): Todo[] {
    return this.todoService.addTodo(createTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id): void {
    return this.todoService.deleteTodo(id);
  }

  @Put(':id')
  editTodo(@Body() updatedTodoDto: CreateTodoDto, @Param('id') id): Todo[] {
    return this.todoService.updateTodo(id, updatedTodoDto);
  }
}
