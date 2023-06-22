import CIcon from "@coreui/icons-react"
import "./CardMovies.css"
import { cilBackspace, cilMedicalCross } from "@coreui/icons"
import Rate from "../../Rate"

const CardMovies = ({movie :{name, img, rate, overview}}) => {
  return (
  
      <div className="card">
           <div className="movie">
      <div className="icons">
    <CIcon icon={cilBackspace} className="deleteIc" size="xl"/>
    <CIcon icon={cilMedicalCross} className="deleteIc" size="xl"/>
    </div>
  <img src={img} className="card-img-top imgCard" alt="..."/>
  <div className="card-body">
    <h4>{name}</h4>
    <p className="card-text m-overviem">{overview}</p>

     <Rate rate={rate}/>
  </div>
</div>
    </div>
  )
}

export default CardMovies