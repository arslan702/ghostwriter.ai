import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default function Today() {
  return (
    <div>
      <div className='bg-[#e6e4ff]  md:px-20 px-4 md:py-12 py-4 text-center ' >
<p className='text-[30px] font-[700] py-2 ' >Automate your <span className='text-[#0059E6] ' >Blog</span>  today</p>
    <p className='text-[16px] font-[400] ' >Get your samples and start generating articles for your business</p>
    <br />
    <div className='flex justify-center  ' >
    <button className='bg-[#7a73ff] text-white h-[40px] w-[190px] rounded-2xl flex justify-center gap-3 items-center ' >Get 3 Free Article <span><FaPlay /></span> </button>
    </div>
    </div>
    </div>
  )
}
