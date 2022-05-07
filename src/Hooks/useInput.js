import { useState } from 'react'

export const useInput = () => {

  const [inputChange, setInputChange] = useState('')

  
  return {
    inputChange,
    setInputChange
  }
  
}

