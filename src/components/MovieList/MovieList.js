import React from 'react';
import MovieMin from '../MovieMin/MovieMin';

const MovieList = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                
                    {                    
                       props.movies && props.movies.map((movie, i) => {
                        
                        
                        return (<MovieMin key={i} name={movie.name} image={movie.poster_path}></MovieMin>)

                    })
                    
                    }

                </div>
            </div>
        </div>
    );



}
export default MovieList;