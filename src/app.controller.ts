import { Controller, Get, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService } from './app.service';

@ApiTags('CheckApp')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    status: '2XX',
    description: 'Server is running',
  })
  @ApiResponse({ status: '5XX', description: 'App Not working' })
  @Get()
  getRoot(@Res() res: Response): void {
    return this.appService.getRoot(res);
  }
}
