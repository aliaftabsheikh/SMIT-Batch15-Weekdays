import React, { useContext } from 'react'
import { UserContext } from '../../App'



const ChildC = () => {
    const {name, age} = useContext(UserContext)
  return (
    <div>Name: {name}, Age: {age}</div>
  )
}

export default ChildC