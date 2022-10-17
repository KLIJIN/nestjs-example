import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovie, UpdateMovie } from './entities/dto/movie.dto';
import { Movie } from './entities/movie.entiti';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`movie with id ${id} not found`);
    }
    return movie;
  }

  removeMovie(id: number): void {
    this.getMovie(id); // функция выдаст ошибку, если id не будет найден
    const tempArr = this.movies.filter((movie) => movie.id !== +id);
    this.movies = [...tempArr];
  }

  createMovie(movieData: CreateMovie): void {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  updateMovie(id, movieData: UpdateMovie): Movie[] {
    const movie = this.getMovie(+id);
    this.removeMovie(+id);
    this.movies.push({ ...movie, ...movieData });
    return;
  }
}
