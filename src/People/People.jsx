import React from 'react'

const People = ({name,age}) => {
  return (
    <div className='flex flex-col justify-center items-center cursor-pointer'>
      <div className=" w-[8vmin] h-[8vmin] bg-white rounded-full border-2 border-blue-500 outline outline-offset-1 outline-2 outline-white flex justify-center items-center text-xl text-blue-600">
        {name[0].toUpperCase()}
      </div>
      <p className=' text-white'>{name}</p>
    </div>
  )
}

export default People