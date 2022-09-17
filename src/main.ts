import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as AWS from 'aws-sdk'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_USER_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET,
})

export default s3

