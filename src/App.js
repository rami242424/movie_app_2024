import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };

  // async(기다려라!) 와 await(await 뒤에 따라오는 애를)를 붙여 api를 가져오는데 시간소요가 있음을 상기시킨다.
  getMovies = async () => {
    // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // console.log(movies.data.data.movies); // -> 너무 길다. es6에서 줄일 수 있다.(아래 방법)

    const {
      data: {
        data: { movies } 
      } 
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    // console.log(movies);
    this.setState({ movies, isLoading: false })
  };

  // 컴포넌트가 마운트되면 getMovies 호출
  componentDidMount(){
    this.getMovies();
  }
  // componentDidMount에서 data를 fetch 함 

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="containder">
      {/* {this.state.isLoading ? "Loading" : "We are ready" } */}
      {/* {isLoading ? "Loading" : "We are ready" }     */}
      {isLoading 
        ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        )
        : (
        <div className="movies">
          {movies.map(movie => (
        // console.log(movie);
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
            )) 
          }
        </div>
    )}    
      </section>
    );
  }
}

export default App;
