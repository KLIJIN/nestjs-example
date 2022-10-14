import { Injectable, NotFoundException } from '@nestjs/common';
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

  removeMovie(id: number) {
    this.getMovie(id); // функция выдаст ошибку, если id не будет найден
    const tempArr = this.movies.filter((movie) => movie.id !== +id);
    this.movies = [...tempArr];
  }

  createMovie(movieData): void {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  updateMovie(id, movieData): Movie[] {
    this.getMovie(+id);
    const tempArr = this.movies.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: movieData.title,
          year: movieData.year,
          genres: movieData.genres,
        };
      }
      return item;
    });
    this.movies = [...tempArr];
    return tempArr;
  }
}
