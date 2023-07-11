import React from 'react'

const NormalButton = ({text, isBorder, onClick}) => {
  return (
    <button onClick={onClick} className={isBorder ? `py-2 px-7 rounded-lg hover:transition border border-black text-black hover:bg-black hover:text-white hover:border-none` : `py-2 px-7 rounded-lg  transition hover:transition text-white bg-black  hover:bg-white hover:text-black hover:border hover:border-black`}>
        {text}
    </button>
  )
}

export default NormalButton
