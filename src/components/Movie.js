import React from 'react'
import { Link } from "react-router-dom"

const Movie = (props) => {
  return (
    <Link to={`/movie/${props.id}`} id={props.id}>
      <div className="background-img"
      style={{
        backgroundImage: `url(${props.poster})`, backgroundRepeat: "no-repeat",
        backgroundSize: "cover"}}
      >
        <div className="title-container">
          <h1 className="title">{props.title}</h1>
        </div>
      </div>
    </Link>
  )
}



export default Movie;
