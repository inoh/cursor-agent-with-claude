import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  // in-memoryデータストア
  private tasks: TaskDto[] = [];

  findAll(): TaskDto[] {
    return this.tasks;
  }

  findOne(id: string): TaskDto {
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      throw new NotFoundException(`ID: ${id} のタスクが見つかりません`);
    }
    return task;
  }

  create(createTaskDto: CreateTaskDto): TaskDto {
    const newTask: TaskDto = {
      id: Date.now().toString(),
      ...createTaskDto,
      description: createTaskDto.description || '',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): TaskDto {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException(`ID: ${id} のタスクが見つかりません`);
    }

    const task = this.tasks[taskIndex];
    const updatedTask = {
      ...task,
      ...updateTaskDto,
      updatedAt: new Date(),
    };

    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  remove(id: string): void {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException(`ID: ${id} のタスクが見つかりません`);
    }
    this.tasks.splice(taskIndex, 1);
  }
} 