import React from 'react'
import { Link } from 'react-router-dom';

export default function (props) {

    return (

        <div className='row'>

            {/* {props.movies.pelis && props.movies.pelis.Search.map(movie => (
                <div key={movie.id} className="col-xs-3">
                    {console.log(movie)}
                    <h6> {movie.Title} </h6>
                    <div >
                    <Link to ={`/movies/${movie.imdbID}`}> 
                    <img  src={movie.Poster} /> 
                    </Link>
                    </div>
                </div>
            ))} */}
        </div>
    )
}


