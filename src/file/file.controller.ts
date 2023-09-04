import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('file')
export class FileController {
  @Get(':fileName')
  findAll(@Param('fileName') filename: string) {
    try {
      console.log(filename);
      console.log(`${join(process.cwd())}/uploads/${filename}`);
      const file = createReadStream(
        `${join(process.cwd())}/uploads/${filename}`,
      );
      return new StreamableFile(file);
    } catch (error) {
      console.log(error);
    }
  }
}
