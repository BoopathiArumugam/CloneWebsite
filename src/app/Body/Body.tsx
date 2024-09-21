'use client'

import Pic from './Mahe.jpg'
import pic1 from './staf.jpeg';
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
  } from "@nextui-org/table"
 import React, { useCallback } from 'react'
import Image from 'next/image'
import logo from './scroll4.jpg'
import logo1 from './scroll1.jpeg'
import logo2 from './scroll2.jpg'
import logo3 from './scroll3.jpg'
import Link from 'next/link';


function Body() {  
  return (
    <>
      <div className='bg-[#e8f8e1] py-5'>
        <div className=" mx-20 ">
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
          <div className="flex flex-col gap-8 relative items-center md:items-start">
            <Image 
            src={Pic} 
            alt="Picture of the author" 
            width={1800}
            height={1000}
            priority 
            />
            </div>
            <div className="flex flex-col w-1/2 mx-5 ">
              <h1 className="text-3xl font-bold italic font-serif	 text-[#0c0a0a] text-justify ">
               Mahendra College of Engineering </h1>
                <p className="py-5">
                <a className=" text-xl italic  text-justify">The Mahendra Educational Trust was established in the 
                  year 1978 by Shri. M. G. Bharath Kumar, a renowned educationist with an object
                  of imparting a high standard of education to rural children. The trust is located
                  at Kalippatty - midway between Salem and Tiruchengode. Thiru. M.G. Bharath Kumar,
                  the Chairman of the Trust is assisted by the Governing and Advisory Council in
                  matters of Policy, Planning and Development of the Institutions. Tmt. Valliyammal
                  Bharath Kumar, a best teacher awardee, is the Secretary of the Trust. Thiru Ba.
                  Mahendhiran, a young and dynamic engineer, is the Managing Director.The Trust 
                  lays stress on providing quality education and maintaining high degree of discipline.
                  To meet the demands of the people of Tiruchengode, Namakkal and Salem, the Trust broadened 
                  its educational service and started Schools and Colleges in those areas.
                </a>
                 </p>
             
            </div>  
          </div>
        </div>
        <div className=" mx-auto scroll-auto py-7 ">
          <div className="flex justify-between  md:flex-row  items-center md:items-start   text-left">
           <div className='embla mx-auto max-w-full max-h-full'>
            <div className='embla__viewport  '>
             <div className='embla__container h-full overscroll-y-auto'>
              <div className='embla__slide flex items-center justify-center'>
               <Image src={logo} alt="Picture of the author"  width={1200}  />
              </div>
              <div className='embla__slide flex items-center justify-center'>
               <Image src={logo1} alt="Picture of the author"  width={1000}/>
              </div>
              <div className='embla__slide flex items-center justify-center'>
               <Image src={logo2} alt="Picture of the author"  width={1250}/>
              </div>
              <div className='embla__slide flex items-center justify-center'>
               <Image src={logo3} alt="Picture of the author"  width={1250}/>
              </div>
              <div className='embla__slide flex items-center justify-center'>
               <Image src={logo} alt="Picture of the author"  width={1250}/>
              </div>
              <div className='embla__slide flex items-center justify-center'>
               <Image src={logo1}  alt="Picture of the author" width={1000}/>
              </div>
           </div>
         </div>
       </div>
      </div>
        </div>
        <div className=" mx-14  py-5">
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <div className="flex gap-7 text-[18px] text-[#160f0f] justify-center md:justify-start"> 
              </div>
              <p className="text-2xl font-bold text-[#0c0a0a]">
              Mahendra Engineering College Fees & Eligibility
              <Table aria-label="Example static collection table" className='py-8'>
      <TableHeader>
        <TableColumn>Course</TableColumn>
        <TableColumn>Fees</TableColumn>
        <TableColumn>Eligibility</TableColumn>
        <TableColumn>Application Date</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>BE
          16 Courses</TableCell>
          <TableCell>₹2.2 Lakhs (Total Fees)</TableCell>
          <TableCell>10+2 with 50%</TableCell>
          <TableCell>6 May - 11 Jun 2024</TableCell>
          <TableCell><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>B.Tech
          3 Courses</TableCell>
          <TableCell>₹2.2 Lakhs (Total Fees)</TableCell>
          <TableCell>	10+2 with 50%</TableCell>
          <TableCell>6 May - 11 Jun 2024 </TableCell>
          <TableCell><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>M.E
          7 Courses</TableCell>
          <TableCell>₹60,000 (Total Fees)</TableCell>
          <TableCell>Graduation with 50%</TableCell>
          <TableCell>15 Apr - 14 May 2024</TableCell>
          <TableCell><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'>ApplyNow</Link></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>BE
          10 Courses</TableCell>
          <TableCell>₹1.65 Lakhs (Total Fees)</TableCell>
          <TableCell>10+3 with 50%</TableCell>
          <TableCell> May - 11 Jun 2024</TableCell>
          <TableCell><Link href="/Components/GoogleForm" className='ml-5 hover:border-b  bg-orange-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full'
          >ApplyNow</Link></TableCell>
        </TableRow>
      </TableBody>
    </Table>    
              </p>
            </div>
            <div className="flex flex-col gap-8 relative py-7">
            <Image src={pic1} width={1000} alt="Picture of the author" priority />
           
            </div>
            <div className="flex flex-col gap-8 relative">
            </div>
            <span></span>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Body;