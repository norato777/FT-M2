import React from "react";
import { connect } from "react-redux";
import { getDetail, setMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
    //    this.props.setMovie(
    //      this.props.movies.find(
    //        (movie) => movie.imdbID === this.props.match.params.id
    //      )
    //    );
  }

  componentWillUnmount() {
    this.props.setMovie({});
  }

  render() {
    return (
      <div className="movie-detail">
        <h1>Detalle de la pelicula</h1>
        <h2>{this.props.detail?.Title || ""}</h2>
        <h2>{this.props.detail?.Year || ""}</h2>
        <img src={this.props.detail?.Poster} alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesLoaded,
  detail: state.movieDetail,
});

const mapDispatchToProps = (dispatch) => ({
  setMovie: (movie) => dispatch(setMovieDetail(movie)),
  getMovie: (imdbID) => dispatch(getDetail(imdbID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
