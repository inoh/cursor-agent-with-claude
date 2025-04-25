import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // Fastifyアダプターを使用してNestJSアプリケーションを作成
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000);
  const apiPrefix = configService.get<string>('API_PREFIX', 'api');
  const swaggerPath = configService.get<string>('SWAGGER_PATH', 'docs');

  // API URLにプレフィックスを設定
  app.setGlobalPrefix(apiPrefix);

  // バリデーションパイプをグローバルに設定
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Swagger設定
  const config = new DocumentBuilder()
    .setTitle('タスク管理API')
    .setDescription('NestJS + Fastifyによるタスク管理API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(port, '0.0.0.0');
  console.log(`アプリケーションが起動しました: http://localhost:${port}/${apiPrefix}`);
  console.log(`Swagger UI: http://localhost:${port}/${swaggerPath}`);
}
bootstrap(); 