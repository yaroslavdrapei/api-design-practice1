import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GistsService } from './gists.service';
import { CreateGistDto } from './dtos/create-gist.dto';

@Controller('gists')
export class GistsController {
  constructor(private gistsService: GistsService) {}
  @Get()
  findAll(@Query('search') search: string) {
    if (search !== undefined) {
      return this.gistsService.searchByTitle(search);
    }
    return this.gistsService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    console.log(body);
    // this.gistsService.create(body);
  }
}
