import React from 'react';
import './App.css';

function App() {

  const handleMovie = () => {
    var promise = fetch('https://api.themoviedb.org/3/search/movie?query=fish&api_key=2c73b0f220a02912d9c2cd39c09588e2&fbclid=IwAR0aMYke5NeHYK8WfoZZaS4WsyxnouJCa56NBWfs8yQMahcWx8pA5vLs9I0');
    promise.then((info)=>{

      return info.json();

    }).then((info)=>{

        console.log(info);

    });

  }




  return (
    <div className="App">
      <header className="App-header">

        <h1>Watchout</h1>
        <p>Search the best of the best.</p>
        
      </header>
    </div>
  );
}

export default App;
