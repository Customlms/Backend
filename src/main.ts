import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000',
      credentials: true,
    },
  });

  const options = new DocumentBuilder()
    .setTitle('Customlms Swagger Docs')
    .setDescription('Customlms API 명세서')
    .setVersion('1.0')
    .build();

  const Document = SwaggerModule.createDocument(app, options, {
    include: [AppModule],
  });
  SwaggerModule.setup('api/docs', app, Document);

  const port = 3000;
  await app.listen(port);
}
bootstrap();
