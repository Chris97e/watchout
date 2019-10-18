import React from 'react';

const MovieMin =(props) =>{
    
    return(
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="No image" style={{width:"100%", height:360}}/> :  <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="holas" style={{width:"100%", height:360}} />
                    }
                </div>
            </div>
        </div>
    );

}
export default MovieMin;