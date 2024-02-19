
import Image from 'next/image'; 
import logo from "../../../public/logo.png"
import { FaSearch } from "react-icons/fa";
import HeaderOption from './HeaderOption';

import { IoHomeSharp } from "react-icons/io5";
import { MdSupervisorAccount } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { BsChatLeftTextFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

function Header() {


  return (
    <div className="bg-white flex justify-evenly border-b border-solid border-gray-300 py-2 w-full top-0 sticky z-999 ">
      <h1></h1>

      <div className='flex'>
        <Image  
          src={logo} 
          alt='logo' 
          width={40}
          height={40}
          className= "object-contain mr-1"
           />
                  
          <div className='flex p-2 h-22 items-cente bg-[#eef3f8] color-gray items-center text-gray-400'>
            {/* SearchIcon */}
            <FaSearch />
            <input type="text" className='outline-none border-none rounded-md bg-transparent'/>
          </div>
        </div>
       
        <div className="flex ">
          <HeaderOption Icon={IoHomeSharp} title="Home"/>
          <HeaderOption Icon={MdSupervisorAccount} title="My Network"/>
          <HeaderOption Icon={MdBusinessCenter} title="Jobs"/>
          <HeaderOption Icon={BsChatLeftTextFill} title="Messaging"/>
          <HeaderOption Icon={IoIosNotifications} title="Notifications"/>
          <HeaderOption avatar="https://compassionate-leaky-e9b16b.netlify.app/images/IG_Sonny.jpeg" title="me"/>
        </div>
    </div>
  );
}

export default Header;
