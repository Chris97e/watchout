import React from 'react';
import './App.css';
import SearchArea from '../../components/SearchArea.js/SearchArea';
import Nav from '../../components/Nav/Nav.js';
import MovieList from '../../components/MovieList/MovieList';


function App() {

  const apiKey = "b055e93a46f74183601af5f231d9e7ff";
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`)
      .then(data => data.json())
      .then(data => {
        setMovies(data.results);

      });

  };


  const handleChange = (e) => {
    setSearch(e.target.value);

  }

  return (
    <div className="App">
      <header className="App-header">

        <Nav></Nav>
        <SearchArea handleSubmit={handleSubmit} handleChange={handleChange}></SearchArea>  
        <MovieList movies={movies}></MovieList>
          
        

      </header>
    </div>
  );
}

export default App;
