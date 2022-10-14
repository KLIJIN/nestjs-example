import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('/movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'return all movies';
  }

  @Get('/search')
  findAll(@Query() query) {
    return `you search ${query.year} width title: ${query.title}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `вы зашли в ${id} фильм`;
  }

  @Post()
  createMovie(@Body() body) {
    return body;
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return `ты удалил фильм ${id} :( `;
  }

  @Patch('/:id')
  updateMovie(@Param('id') id: string, @Body() body) {
    return {
      updatedMovie: id,
      ...body,
    };
  }
}
