import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };

  // async(기다려라!) 와 await(await 뒤에 따라오는 애를)를 붙여 api를 가져오는데 시간소요가 있음을 상기시킨다.
  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  }

  // 컴포넌트가 마운트되면 getMovies 호출
  componentDidMount(){
    this.getMovies();
  }
  // componentDidMount에서 data를 fetch 함 

  render() {
    const { isLoading } = this.state;
    return (
      <div>
      {/* {this.state.isLoading ? "Loading" : "We are ready" } */}
      {isLoading ? "Loading" : "We are ready" }    
      </div>
    );
  }
}

export default App;
