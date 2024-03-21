import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import configService from './config/config.service';

const serverPort = +process.env.PORT || 5001;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: 'http://localhost:3000'
    });
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    const apiDocs = new DocumentBuilder()
        .addServer(configService.getConfig().serverEndpoint)
        .addBearerAuth({
            description: `Please enter the authentication token`,
            name: 'Authorization',
            bearerFormat: 'Bearer',
            scheme: 'Bearer',
            type: 'http',
            in: 'Header',
        })
        .build();
    const document = SwaggerModule.createDocument(app, apiDocs);
    SwaggerModule.setup('docs', app, document);
    await app.listen(serverPort);
}
bootstrap();
