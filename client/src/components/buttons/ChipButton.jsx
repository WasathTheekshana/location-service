import React from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'

const ChipButton = ({onClick}) => {
  return (
    <button onClick={onClick}>
        <BsArrowRightCircle size={30} />
    </button>
  )
}

export default ChipButton