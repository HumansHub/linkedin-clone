import Image from "next/image"
import Avatar from "../../../public/avatar.png"

function HeaderOption({avatar, Icon,title}) {
  return (
    <div className='flex flex-col items-center mr-[20px] text-gray-400 cursor-pointer 
                    hover:text-black justify-center'>
        {Icon && <Icon className="" />}
        {avatar && 
            <Image width={15} height={15} className="object-contain rounded-full" src={Avatar} alt="Avatar" 
        />}
        <h3 className='text-[12px] font-[400px]'>{title}</h3>
    </div>
  )
}

export default HeaderOption