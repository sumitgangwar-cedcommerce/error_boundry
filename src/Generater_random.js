import React, { useEffect, useMemo } from 'react'

const Generater_random = (props) => {

  const num = useMemo(()=>{
    return (Math.random() * 20).toFixed(0)
  },[props.counter])


  useEffect(()=>{
      if(Number(num) < 5){
          throw   new Error(`${num} Smaller than 5`)
      }
  })
    
    // console.log(props.num)
  return (
    <h1>
        {num}
    </h1>
  )
}

export default Generater_random