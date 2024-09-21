'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className=' py-5 bg-[#e8f8e1]' >
    <div className="container mx-auto ">
      <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
      <div className="flex flex-col gap-5   relative items-center md:items-start">
      <p className="text-2xl font-bold text-[#0c0a0a]">
      Courses Offered By Mahendra College of Engineering 2024
          </p>
          <p className='text-2xl font-bold text-[#0c0a0a]'>Bachelor of Engineering [BE] </p>
          <div className=" border-solid border-2 ">
            <table className="table-auto">
              <thead>
                <tr className=' border-solid bg-orange-300'>
                 <th className=" px-4 py-2">Course</th>
                 <th className="border px-4 py-2">Fees</th>
                 <th className="border px-4 py-2">Eligibility</th>
                 <th className="border px-4 py-2">Application Date</th>
                 <th className="border px-4 py-2">Action</th>
               </tr>
             </thead>
             <tbody>
                <tr>
                <td className="border px-4 py-2">Electronics & Communication Engineering</td>
                <td className="border px-4 py-2">₹2.2 Lakhs (Total Fees)</td>
                <td className="border px-4 py-2">10+2 with 50% + TNEA</td>
                <td className="border px-4 py-2">6 May - 11 Jun 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr className="bg-orange-100">
                <td className="border px-4 py-2">Computer Science And Engineering </td>
                <td className="border px-4 py-2">₹2.2 Lakhs (Total Fees)</td>
                <td className="border px-4 py-2">10+2 with 50% + TNEA</td>
                <td className="border px-4 py-2">6 May - 11 Jun 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Biomedical Engineering</td>
                <td className="border px-4 py-2">₹2.2 Lakhs (Total Fees)</td>
                <td className="border px-4 py-2">	10+2 with 50% + TNEA</td>
                <td className="border px-4 py-2">	6 May - 11 Jun 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">Artificial Intelligence and Data Science</td>
                <td className="border px-4 py-2">₹2.2 Lakhs (Total Fees)</td>
                <td className="border px-4 py-2">10+2 with 50% + TNEA</td>
                <td className="border px-4 py-2">15 Apr - 14 May 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Mechanical Engineering</td>
                <td className="border px-4 py-2">₹2.2 Lakhs (Total Fees)</td>
                <td className="border px-4 py-2">10+2 with 50% + TNEA</td>
                <td className="border px-4 py-2">	10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">Civil Engineering</td>
                <td className="border px-4 py-2">₹2.2 Lakhs (Total Fees)</td>
                <td className="border px-4 py-2">10+2 with 50% + TNEA</td>
                <td className="border px-4 py-2">	10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Information Technology</td>
                <td className="border px-4 py-2">₹2.2 Lakhs (Total Fees)</td>
                <td className="border px-4 py-2">10+2 with 50% + TNEA</td>
                <td className="border px-4 py-2">	10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">Electrical And Electronics Engineering </td>
                <td className="border px-4 py-2">₹2.2 Lakhs (Total Fees)</td>
                <td className="border px-4 py-2">10+2 with 50% + TNEA</td>
                <td className="border px-4 py-2">	10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Mechatronics Engineering</td>
                <td className="border px-4 py-2">₹2.2 Lakhs (Total Fees)</td>
                <td className="border px-4 py-2">10+2 with 50% + TNEA</td>
                <td className="border px-4 py-2">	10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr> 
             </tbody>
           </table>
         </div>
        </div>
        <div className="flex flex-col w-1/2 py-12 ">
        <div className="flex flex-col gap-5   relative items-center md:items-start">
      <p className="text-2xl font-bold text-[#0c0a0a]">
       M.C.A 
          </p>
          <div className=" border-solid border-2 border-gray-200 py-15">
            <table className="table-auto">
              <thead>
                <tr className=' border-solid  bg-orange-300'>
                 <th className=" px-4 py-2">Course</th>
                 <th className="border px-4 py-2">Fees</th>
                 <th className="border px-4 py-2">Eligibility</th>
                 <th className="border px-4 py-2">Application Date</th>
                 <th className="border px-4 py-2">Action</th>
               </tr>
             </thead>
             <tbody>
                <tr>
                <td className="border px-4 py-2">Master of Computer Applications [M.C.A] </td>
                <td className="border px-4 py-2">Total Fees:₹41,000</td>
                <td className="border px-4 py-2">Graduation</td>
                <td className="border px-4 py-2">10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
             </tbody>
           </table>
         </div>
        </div>
        <div className="flex flex-col gap-5 py-5  relative items-center md:items-start">
      <p className="text-2xl font-bold text-[#0c0a0a]">
         MBA
          </p>
          <div className=" border-solid border-2 border-gray-200 py-15">
            <table className="table-auto">
              <thead>
                <tr className=' border-solid  bg-orange-300'>
                 <th className=" px-4 py-2">Course</th>
                 <th className="border px-4 py-2">Fees</th>
                 <th className="border px-4 py-2">Eligibility</th>
                 <th className="border px-4 py-2">Application Date</th>
                 <th className="border px-4 py-2">Action</th>
               </tr>
             </thead>
             <tbody>
                <tr>
                <td className="border px-4 py-2">Master of Business Administration</td>
                <td className="border px-4 py-2">Total Fees:₹41,000</td>
                <td className="border px-4 py-2">Graduation</td>
                <td className="border px-4 py-2">10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>       
             </tbody>
           </table>
         </div>
        </div>
        <div className="flex flex-col gap-5 py-5  relative items-center md:items-start">
      <p className="text-2xl font-bold text-[#0c0a0a]">
          B.Tech
          </p>
          <div className=" border-solid border-2 border-gray-200 py-15">
            <table className="table-auto">
              <thead>
                <tr className=' border-solid  bg-orange-300'>
                 <th className=" px-4 py-2">Course</th>
                 <th className="border px-4 py-2">Fees</th>
                 <th className="border px-4 py-2">Eligibility</th>
                 <th className="border px-4 py-2">Application Date</th>
                 <th className="border px-4 py-2">Action</th>
               </tr>
             </thead>
             <tbody>
                <tr>
                <td className="border px-4 py-2">Bachelor of Technology </td>
                <td className="border px-4 py-2">Total Fees:₹2,20,000</td>
                <td className="border px-4 py-2">10+2 with 50% + TNEA</td>
                <td className="border px-4 py-2">6 May - 11 Jun 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>      
             </tbody>
           </table>
         </div>
        </div>
        </div>  
      </div>
    </div>
    <div className="container mx-auto  py-5">
    <div className="container mx-auto ">
      <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
      <div className="flex flex-col gap-5   relative items-center md:items-start">
          <p className='text-2xl font-bold text-[#0c0a0a]'>Bachelor of Engineering [BE.Lateral]  </p>
          <div className=" border-solid border-2 border-gray-200">
            <table className="table-auto">
              <thead>
                <tr className=' border-solid  bg-orange-300'>
                 <th className=" px-4 py-2">Course</th>
                 <th className="border px-4 py-2">Fees</th>
                 <th className="border px-4 py-2">Application Date</th>
                 <th className="border px-4 py-2">Action</th>
               </tr>
             </thead>
             <tbody>
                <tr>
                <td className="border px-4 py-2">Electronics & Communication Engineering</td>
                <td className="border px-4 py-2">₹1,65,000 Total Fees</td>
                <td className="border px-4 py-2">6 May - 11 Jun 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr className="bg-orange-100">
                <td className="border px-4 py-2">Computer Science And Engineering </td>
                <td className="border px-4 py-2">₹1,65,000 Total Fees</td>
                <td className="border px-4 py-2">6 May - 11 Jun 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Biomedical Engineering</td>
                <td className="border px-4 py-2">₹1,65,000 Total Fees</td>
                <td className="border px-4 py-2">	6 May - 11 Jun 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">Mechanical Engineering</td>
                <td className="border px-4 py-2">₹1,65,000 Total Fees</td>
                <td className="border px-4 py-2">	10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Civil Engineering</td>
                <td className="border px-4 py-2">₹1,65,000 Total Fees</td>
                <td className="border px-4 py-2">	10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">Information Technology</td>
                <td className="border px-4 py-2">₹1,65,000 Total Fees</td>
                <td className="border px-4 py-2">	10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Electrical And Electronics Engineering </td>
                <td className="border px-4 py-2">₹1,65,000 Total Fees</td>
                <td className="border px-4 py-2">	10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">Mechatronics Engineering</td>
                <td className="border px-4 py-2">₹1,65,000 Total Fees</td>
                <td className="border px-4 py-2">	10 June - 04 Jul 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
             </tbody>
           </table>
         </div>
        </div>
        <div className="flex flex-col w-1/2 py-4 ">
        <div className="flex flex-col gap-2   relative items-center md:items-start">
      <p className="text-2xl font-bold text-[#0c0a0a]">
           Master of Engineering [ME] 
          </p>
          <div className=" border-solid border-2 border-gray-200 py-15">
            <table className="table-auto">
              <thead>
                <tr className=' border-solid  bg-orange-300'>
                 <th className=" px-4 py-2">Course</th>
                 <th className="border px-4 py-2">Fees</th>
                 <th className="border px-4 py-2">Eligibility</th>
                 <th className="border px-4 py-2">Application Date</th>
                 <th className="border px-4 py-2">Action</th>
               </tr>
             </thead>
             <tbody>
                <tr>
                <td className="border px-4 py-2">Computer Science And Engineering </td>
                <td className="border px-4 py-2">Total Fees:₹60,000</td>
                <td className="border px-4 py-2">Graduation</td>
                <td className="border px-4 py-2">15 Apr - 14 May 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">Communication Systems</td>
                <td className="border px-4 py-2">Total Fees:₹60,000</td>
                <td className="border px-4 py-2">Graduation</td>
                <td className="border px-4 py-2">15 Apr - 14 May 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Engineering Design </td>
                <td className="border px-4 py-2">Total Fees:₹60,000</td>
                <td className="border px-4 py-2">Graduation</td>
                <td className="border px-4 py-2">15 Apr - 14 May 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">Information Technology </td>
                <td className="border px-4 py-2">Total Fees:₹60,000</td>
                <td className="border px-4 py-2">Graduation</td>
                <td className="border px-4 py-2">15 Apr - 14 May 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Power Electronics And Drives </td>
                <td className="border px-4 py-2">Total Fees:₹60,000</td>
                <td className="border px-4 py-2">Graduation</td>
                <td className="border px-4 py-2">15 Apr - 14 May 2024</td>
                <td className="border px-4 py-2"><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></td>
                </tr>
             </tbody>
           </table>
         </div>
        </div>
        </div>  
      </div>
    </div>
    </div>
  </div>
  )
}

export default page
