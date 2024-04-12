import React from 'react';

function Food({ fav }){
  // console.log({fav});
  return <h1>i like { fav }!</h1>
}

function App() {
  return (
    <div>
      <h1>hello!!</h1>
      <Food fav="kimchi" />
      <Food fav="burger" />
      <Food fav="tteokbboki" />
      <Food fav="kimbab" />
    </div>

  );
}

export default App;
