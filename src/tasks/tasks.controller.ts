import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskDto } from './dto/task.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: '全タスクの取得' })
  @ApiResponse({ status: 200, description: '成功', type: [TaskDto] })
  findAll(): TaskDto[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '特定のタスクの取得' })
  @ApiParam({ name: 'id', description: 'タスクID' })
  @ApiResponse({ status: 200, description: '成功', type: TaskDto })
  @ApiResponse({ status: 404, description: 'タスクが見つかりません' })
  findOne(@Param('id') id: string): TaskDto {
    return this.tasksService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'タスクの作成' })
  @ApiResponse({ status: 201, description: 'タスクが作成されました', type: TaskDto })
  create(@Body() createTaskDto: CreateTaskDto): TaskDto {
    return this.tasksService.create(createTaskDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'タスクの更新' })
  @ApiParam({ name: 'id', description: 'タスクID' })
  @ApiResponse({ status: 200, description: 'タスクが更新されました', type: TaskDto })
  @ApiResponse({ status: 404, description: 'タスクが見つかりません' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): TaskDto {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'タスクの削除' })
  @ApiParam({ name: 'id', description: 'タスクID' })
  @ApiResponse({ status: 204, description: 'タスクが削除されました' })
  @ApiResponse({ status: 404, description: 'タスクが見つかりません' })
  remove(@Param('id') id: string): void {
    this.tasksService.remove(id);
  }
} 