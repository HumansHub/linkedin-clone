import React from 'react'
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import InputOption from './InputOption';
import { MdOutlineChat } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { LuSendHorizonal } from "react-icons/lu";

function Post({name,description,message,photoUrl}) {
  return (
    <div className='bg-white p-3 mb-3 rounded-md'>
        <div className='flex mb-1'>
            <BiSolidUserCircle />
            <div className="ml-2">
                <h2 className=''>{name}</h2>
                <p className='text-[12px] text-gray-400'>{description}</p>
            </div>
        </div>
        
        <div className='overflow-wrap-normal'>
            <p>{message}</p>
        </div>

        <div className="flex justify-evenly">
            <InputOption Icon={AiOutlineLike} title="Like" color="gray"/>             
            <InputOption Icon={MdOutlineChat} title="Comment" color="gray"/>           
            <InputOption Icon={IoShareSocial} title="Share" color="gray"/>             
            <InputOption Icon={LuSendHorizonal} title="Send" color="gray"/>            
        </div>
    </div>
  )
}

export default Post