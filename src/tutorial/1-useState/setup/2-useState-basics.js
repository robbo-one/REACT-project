import React, { useState } from 'react'

// things that relate to all useState hooks
// They all begin with a use , useState , useCallback etc. etc.
// component name must be Uppercase
// the hook must be in the function/component body it needs to be invoked inside the function body
// you cannot call the hook conditionally

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('random title') //you can name this anything for example;[poop, setPoop], and the initial state could be anything also ex. = useState('poop')

  const handleClick = () => {
    if (text === 'random title') {
      setText('helloworld')
    } else {
      setText('random title')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
