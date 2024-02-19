import React from 'react'

function InputOption({Icon,title,color}) {
  return (
    <div className='flex items-center mt-2 text-gray-400 p-2 cursor-pointer
                    hover:bg-gray-100/95 rounded-xl'
    >
        <Icon style={{color:color}} />
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption