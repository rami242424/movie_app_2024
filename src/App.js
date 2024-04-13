import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount(){
    axios.get("https://yts.mx/api/v2/list_movies.json");
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
