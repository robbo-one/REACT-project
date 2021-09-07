import React, { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('random title') //you can name this anything for example;[poop, setPoop], and the initial state could be anything also ex. = useState('poop')

  const handleClick = () => {
    setText('hello world')
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>
      change title
    </button>
    </React.Fragment>
}

export default UseStateBasics
