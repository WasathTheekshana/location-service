import React from 'react'

const Error = ({heading, description}) => {
  return (
    <div className='h-[60vh] w-full flex flex-col items-center justify-center'>
        <h1 className="text-xl font-bold text-center text-gray-700">{heading}</h1>
        <p className='text-gray-500 text-sm text-center'>{description}</p>
    </div>
  )
}

export default Error