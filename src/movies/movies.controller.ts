import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('/movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `вы зашли в ${id} фильм`;
  }

  @Post()
  createMovie() {
    return 'ты создал фильм';
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return `ты удалил фильм ${id} :( `;
  }
}
