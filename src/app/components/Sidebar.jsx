    import React from 'react'
    import Avatar from "../../../public/avatar.png"
    import Banner from "../../../public/banner.jpg"
    import Image from 'next/image'

    function Sidebar() {

        const recenItem = ( topic ) => (
            <div className="mb-3 flex text-[-13px] text-gray-400 font-bold cursor-pointer
                            hover:bg-whitesmoke hover:rounded-md hover:cursor-pointer hover:text-black">
                <span className='mr-3 ml-5'>#</span>
                <p>{topic}</p>
            </div>
        );

    return (
        <div className='top-20 sticky flex-2 rounded-10 text-center h-auto'>
            <div className="flex flex-col items-center border border-solid border-lightgray 
                            border-t-0 border-l-0 border-r-0 border-b-1 rounded-tl-10 
                            rounded-tr-10 bg-white p-b-10">
                <Image src={Banner} alt="" width="" height={60}
                        className="w-full rounded-t-xl
                                object-cover mb-[-20px]"

                />
                <Image src={Avatar} alt="" width={25} height={25}
                    className="rounded-full mb-1"
                />
                <h2 className='text-[18px] font-bold'>Nahuel Lopez</h2>
                <h4 className='text-gray-400 text-[12px]'>Nahu.lopez@gmail.com</h4>
            </div>

            <div className='pt-2 flex flex-col bg-white rounded-b-xl'>
                <div className='px-2 mb-2 text-gray-400 flex flex-row text-[13px] justify-between'>
                    <p className='px-2 font-semibold'>Who viewed you</p>
                    <p className='font-bold text-[#0a66c2]'>2,543</p>
                </div>
                <div className='px-2 mb-2  text-gray-400 flex flex-row text-[13px] justify-between'>
                    <p className=' px-2 font-semibold'>Who on post</p>
                    <p className='font-bold text-[#0a66c2]'>2,543</p>
                </div>
            </div>

            <div className="text-left p-2 b-1 b-solid b-lightgray bg-white rounded-md mt-1 mb-1">
                <p className='font-[13px] pb-3'>Recent</p>
                {recenItem('reactjs')}
                {recenItem('programming')}
                {recenItem('softwareengineering')}
                {recenItem('desing')}
                {recenItem('developer')}
            </div>
        </div>
    )
    }

    export default Sidebar
