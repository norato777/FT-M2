import {
  GET_MOVIES,
  ADD_MOVIE_FAVORITE,
  MOVIE_DETAIL,
  REMOVE_FAV,
} from "../actions";

const initialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  movieDetail: {},
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_MOVIE_FAVORITE: {
      return {
        ...JSON.parse(JSON.stringify(state)),
        moviesFavorites: [
          ...JSON.parse(JSON.stringify(state.moviesFavorites)),
          payload,
        ],
      };
    }

    case GET_MOVIES: {
      return {
        ...JSON.parse(JSON.stringify(state)),
        moviesLoaded: payload.Search,
      };
    }

    case MOVIE_DETAIL: {
      return {
        ...JSON.parse(JSON.stringify(state)),
        movieDetail: payload,
      };
    }

    case REMOVE_FAV: {
      return {
        ...JSON.parse(JSON.stringify(state)),
        moviesFavorites: JSON.parse(
          JSON.stringify(state.moviesFavorites)
        ).filter((movie) => movie.id !== payload),
      };
    }

    default:
      return state;
  }
}
