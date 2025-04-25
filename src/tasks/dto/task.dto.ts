import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({
    description: 'タスクID',
    example: '1',
  })
  id: string;

  @ApiProperty({
    description: 'タスクのタイトル',
    example: 'プロジェクト計画を作成する',
  })
  title: string;

  @ApiProperty({
    description: 'タスクの説明',
    example: '次のスプリントのためのプロジェクト計画書を作成する',
  })
  description: string;

  @ApiProperty({
    description: 'タスクの完了状態',
    example: false,
  })
  completed: boolean;

  @ApiProperty({
    description: '作成日時',
    example: '2023-03-01T12:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: '更新日時',
    example: '2023-03-01T12:00:00Z',
  })
  updatedAt: Date;
} 