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
import { CreateMovie, UpdateMovie } from './entities/dto/movie.dto';
import { Movie } from './entities/movie.entiti';
import { MoviesService } from './movies.service';

@Controller('/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/search')
  findAll(@Query() query) {
    return `you search ${query.year} width title: ${query.title}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getMovie(+movieId);
  }

  @Post()
  createMovie(@Body() body: CreateMovie): string {
    this.moviesService.createMovie(body);
    return `добавлен фильм ${body.title}`;
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    this.moviesService.removeMovie(+id);
    return this.moviesService.getAll();
  }

  @Patch('/:id')
  updateMovie(@Param('id') id: string, @Body() body: UpdateMovie) {
    console.log(body)
    this.moviesService.updateMovie(+id, body);
    return this.moviesService.getAll();
  }
}
