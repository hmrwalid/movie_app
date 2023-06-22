import { CButton, CFormInput } from "@coreui/react"
import "./Search.css"
import Rate from "../Rate"

const Search = ({setsearchByNyame, searchByRate, setsearchByRate}) => {
  return (
    <div className="main-container">
      <div className="barSearch">
      <CFormInput type="text" className="formInput" size="lg"  onChange={(e)=> setsearchByNyame(e.target.value)} />
      <CButton type="submit" className="button">
      Search
    </CButton>
    <Rate 
    setsearchByRate ={setsearchByRate}
    rate={searchByRate}
    />
      </div>
       
    </div>
  )
}

export default Search