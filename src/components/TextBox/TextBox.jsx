import React from 'react'
import './TextBox.css'

function TextBox({title, text}) {
  return (
    <div className='text-box'>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default TextBox