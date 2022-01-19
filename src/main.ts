import { SERVER_PORT } from './config/constants';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  // server port
  const port = +configService.get<number>(SERVER_PORT) || 3000;
  app.useGlobalPipes(new ValidationPipe({transform:true, whitelist:true}));
  const config = new DocumentBuilder()
    .setTitle('Api Desafio')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
  
  // console.log(`listening on port ${await app.getUrl()}`)
}
bootstrap();
