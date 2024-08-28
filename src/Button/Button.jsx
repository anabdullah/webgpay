import React from 'react'

const Button = ({ content, onClick, icon, cName}) => {
    return (
        <div className={`cursor-pointer py-1 px-5 rounded-2xl text-white bg-gradient-to-r from-blue-500 to-blue-900 overflow-hidden max-w-full ${cName}`}>
            {icon}
            {content}
        </div>
    )
}

export default Button