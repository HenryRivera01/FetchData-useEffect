import { useState, useEffect } from "react"

export const ChangeColor = () => {

  const [value, setValue] = useState('');
  useEffect(() => {
     document.body.style.backgroundColor = value 
  }, [value])
  
  return (
    <div>
        <input type="color" onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}
