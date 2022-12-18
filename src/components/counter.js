import React, { useCallback, useState } from 'react'
import Callback from '../callback';
   
function Counter() {
    const [count, SetCount] = useState(0);
    const [new__count, setNew__count] = useState(0);
    const increment=()=>{
        SetCount(count + 1)
    }
    const decrement=()=>{
        if(count>0){
        SetCount(count - 1)
        }
    }
    const newcount=()=>{
        setNew__count(new__count + 5)
    }
 
    // use callback
    const set_callbackk = useCallback(()=>{
        
    },[new__count])         /*har bar render when component will update*/

    
  return (
    <div style={{textAlign :'center'}}>
        <h1>{count}</h1>
        <button style={{padding:"10px" , marginRight:"10px"}} onClick={increment}>+</button>
        <button style={{padding:"10px" , marginRight:"10px"}} onClick={decrement}>-</button>

        <h1>{new__count}</h1>
        <button style={{padding:"10px" , marginRight:"10px"}} onClick={newcount}>+</button>

    <Callback set_callback = {set_callbackk} new__count={new__count}/>
    </div>

  )
}

export default Counter
