import React from 'react'

export default function tutorial() {
  return (
    <div>
    <div className="md:px-24 px-4 md:py-8 py-4 ">
<div className='grid md:grid-cols-2 ' >
<div>
  <p className='text-[35px] font-[700] ' >Tutorial Videos</p>
  <p className='text-[15px] font-[400] md:pr-6 pt-3 ' >Mastering the art of AI content generation may seem challenging, but we're here to assist you. We've prepared a series of instructional videos to support your learning journey. Follow along with us.</p>
<br />
<button className='bg-[#7A73FF] h-[40px] w-[200px] rounded-[6px] text-white  ' >Watch on Youtube</button>
</div>
<div>
<iframe className='rounded-md w-full' width="560" height="315" src="https://www.youtube.com/embed/pmyeOEym1cg?si=MNLFqCfjKt3T16wT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<br />
<br />
</div>
<p className='text-[35px] font-[700] ' >Latest Videos</p>
<div className='md:flex justify-between gap-5 ' >
<iframe className='rounded-md w-full mt-2 ' width="560" height="315" src="https://www.youtube.com/embed/pmyeOEym1cg?si=MNLFqCfjKt3T16wT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe className='rounded-md w-full mt-2 ' width="560" height="315" src="https://www.youtube.com/embed/pmyeOEym1cg?si=MNLFqCfjKt3T16wT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>
    </div>
    </div>
  )
}
