import React from 'react'

const Rate = ({rate, setsearchByRate}) => {
    const stars =(x)=>{
      var starsArray =[];
        for (let i = 0; i<= 5; i++) {
            if (i<= x) {
               starsArray.push(<span onClick={()=>setsearchByRate(i)}>★</span>) 
            }else{
                starsArray.push(<span onClick={()=>setsearchByRate(i)}>☆</span>)   
            }
        }
        return starsArray;
    }
  return (
    <div>{stars(rate)}</div>
  )
}

export default Rate