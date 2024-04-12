import React from 'react';

function Food(){
  return <h1>i like potato!</h1>
}

function App() {
  return (
    <div>
      <h1>hello!!</h1>
      <Food fav="kimchi" />
    </div>

  );
}

export default App;
