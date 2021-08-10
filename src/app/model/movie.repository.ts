import {Movie} from "./movie";

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 0,
        title: "Movie 1",
        description: "Suns resist from shields like photonic creatures. Suns resist from shields like photonic creatures.",
        imageURL: "1.jpeg",
        isPopular: false
      },
      {
        id: 1,
        title: "Movie 2",
        description: "Suns resist from shields like photonic creatures. Suns resist from shields like photonic creatures.",
        imageURL: "2.jpeg",
        isPopular: true
      },
      {
        id: 2,
        title: "Movie 3",
        description: "Suns resist from shields like photonic creatures. Suns resist from shields like photonic creatures.",
        imageURL: "3.jpeg",
        isPopular: true
      },
      {
        id: 3,
        title: "Movie 4",
        description: "Suns resist from shields like photonic creatures. Suns resist from shields like photonic creatures.",
        imageURL: "4.jpeg",
        isPopular: true
      },
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter(value => value.isPopular);
  }

  getMovieByID(id: number): Movie | undefined {
    return this.movies.find(value => value.id == id);
  }
}
