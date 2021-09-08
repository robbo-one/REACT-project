import React, { useState } from 'react'

const UseStateObject = () => {
  // setting up the hook
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  })
  console.log(person)
  return <h2>useState object example</h2>
}

export default UseStateObject
