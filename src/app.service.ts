import { Injectable } from '@nestjs/common';
import s3 from './main'

@Injectable()
export class AppService {
  async uploadAvatar(file) {
    console.log(file)
    const uploadedImage = await s3.upload({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: file.originalname,
      Body: file.buffer,
    }).promise()

    return uploadedImage.Location;
  }

  deleteAvatar() {

  }
}
