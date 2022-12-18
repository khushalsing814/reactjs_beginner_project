import React, { useState, createContext } from 'react'
import ChildB from './childB'

const BioData = createContext();

function ChildA() {
  const [popdrilling, SetPopdrilling] = useState('Manu Thakur');
  return (
    <div>
  <BioData.Provider value={popdrilling}><ChildB/></BioData.Provider>
    </div>
  )
}

export default ChildA
export  {BioData};
