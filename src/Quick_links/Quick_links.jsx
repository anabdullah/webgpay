import React, { useEffect } from 'react'
import { MdArrowForwardIos } from "react-icons/md";


const Quick_links = ({ content, key }) => {

  return (
    <div className=' flex justify-between items-center gap-3 py-2 px-5 rounded-full cursor-pointer' onClick={()=>whenClicked(key)}>
      <p>{content}</p>
      <MdArrowForwardIos/>
    </div>
  )
}

export default Quick_links