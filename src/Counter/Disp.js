import React, { useState } from 'react'

const Disp = () => {
    const[count,setCount]=useState(0)
    function increase()
    {
        setCount(count+1)
    }
    function decrease()
    {
        setCount(count-1)
    }
  return (
    <div>
        <h1>Counter by 1</h1>
        <p>{count}</p>
        <button onClick={()=>increase()}>Plus</button>
        <button onClick={()=>decrease()}>Minus</button>
    </div>
  )
}

export default Disp