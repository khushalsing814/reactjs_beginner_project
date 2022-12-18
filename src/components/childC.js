import React, { useContext } from 'react'
import {BioData} from './childA';


function ChildC({content}) {
 const a =  useContext(BioData);
  console.log(`Hello ${a}`)
  return (
    <div>
   
    </div>
  )
}

export default ChildC
