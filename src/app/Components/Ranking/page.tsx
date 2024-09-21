import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image from './imag.webp'

const page = () => {
  return (
    <div className='bg-[#e8f8e1]'>
          <div className="container mx-auto  ">
      <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] ">
      <div className="flex flex-col gap-5 relative items-center md:items-start">
      <p className="text-2xl font-bold text-[#0c0a0a] py-5">
      Anna University Ranking
          </p>
          <p>Mahendra College of Engineering, Salem B.Tech ranking by Anna University is 279 out of 355 colleges in Tamil Nadu in 2024.</p>
          <div class=" border-solid border-2 ">
            <table class="table-auto">
              <thead>
                <tr className=' border-solid  bg-slate-600 text-white'>
                 <th class=" px-4 py-2">Stream</th>
                 <th class="border px-4 py-2">Stream</th>
               </tr>
             </thead>
             <tbody>
                <tr>
                <td class="border px-4 py-2">B.Tech</td>
                <td class="border px-4 py-2">	#279 out of 355 in Tamil Nadu 2024</td>
                </tr>
             </tbody>
           </table>
         </div>
        </div>
        <div className="flex flex-col w-1/2 py-12 ">
        <div className="flex flex-col gap relative items-center md:items-start">
        <Image 
        src={image}
        width={300}
        height={300}
        />
        </div>
        </div>  
      </div>
    </div>
    </div>
  )
}

export default page
