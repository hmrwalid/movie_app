import CardMovies from "./CardMovie/CardMovies"
import "./Movies.css"

const Movies = ({movieList, searchByNyame,searchByRate}) => {
  return (
    <div className="section-wrapper">
      <div className="CardMovies">
      {movieList
        .filter((elm)=> 
        elm.name.toLowerCase().includes(searchByNyame.toLowerCase().trim())&& 
        elm.rate>= searchByRate)
        .map((movie, i)=>(
         <CardMovies key={i} movie={movie}/>
      ))
       
}
      </div>
  


    </div>
  )
}

export default Movies