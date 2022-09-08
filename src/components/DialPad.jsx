import React, { useEffect, useState } from 'react';

import '../css/components_css/DialPad.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faPhone } from '@fortawesome/free-solid-svg-icons';

const DialPad = (props) => {

  const [numberTyped, setNumberTyped] = useState()

  useEffect(() => {
    let numDisplay = document.querySelector("input")
    let btn = document.querySelectorAll(".btn")
    btn.forEach((num) => {
      num.addEventListener('click', () => {
        setNumberTyped(numDisplay.value += num.innerText)
      })
    })
  }, [])

  const reset = () => {
    setNumberTyped("")
    let numDisplay = document.querySelector("input")
    numDisplay.value = ""
  }

  return (
    <div className='phone-dial-pad-container'>
      <input className='number-display' type='text'/>

      <div className='number-pad-container'>
        <div className='number-row row1'>
          <button className='btn'><span>1</span></button>
          <button className='btn'><span>2</span></button>
          <button className='btn'><span>3</span></button>
        </div>
        <div className='number-row row2'>
          <button className='btn'><span>4</span></button>
          <button className='btn'><span>5</span></button>
          <button className='btn'><span>6</span></button>
        </div>
        <div className='number-row row3'>
          <button className='btn'><span>7</span></button>
          <button className='btn'><span>8</span></button>
          <button className='btn'><span>9</span></button>
        </div>
        <div className='number-row row4'>
          <button className='btn-icon' onClick={() => reset()}><FontAwesomeIcon icon={faDeleteLeft} /></button>
          <button className='btn'><span>0</span></button>
          <button className='btn-icon' onClick={() => reset()}><FontAwesomeIcon icon={faPhone} /></button>
        </div>
      </div>

    </div>
  )
};

export default DialPad;