import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    // 環境変数の読み込み設定
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // タスク管理モジュール
    TasksModule,
  ],
})
export class AppModule {} 