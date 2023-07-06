import CIcon from "@coreui/icons-react"
import "./CardMovies.css"
import { cilBackspace, cilMedicalCross } from "@coreui/icons"
import Rate from "../../Rate"

const CardMovies = ({movie, setMovieLlist, themovieList}) => {
console.log("movieList", themovieList)
const handelDelete =(id)=>{
  setMovieLlist(themovieList.filter(elm=> elm.id !== id))
}

  return (

      <div className="card">
           <div className="movie">
      <div className="icons">
    <CIcon icon={cilBackspace} className="deleteIc" size="xl" onClick={()=>{handelDelete(movie.id)}}/>
    </div>
  <img src={movie.img} className="card-img-top imgCard" alt="..."/>
  <div className="card-body">
    <h4>{movie.name}</h4>
    <p className="card-text m-overviem">{movie.overview}</p>

     <Rate rate={movie.rate}/>
  </div>
</div>
    </div>
  )
}

export default CardMovies