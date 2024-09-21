import Image from 'next/image'
import React from 'react'
import image from './mec.jpg'

const page = () => {
  return (
    <div>
       <div className=' py-5 bg-[#e8f8e1]' >
    <div className="container mx-auto ">
      <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
      <div className="flex flex-col gap-5   relative items-center md:items-start">
      <p className="text-2xl font-bold text-[#0c0a0a]">
      PLACEMENT RECORD :
          </p>
          <div className=" border-solid border-2 ">
            <table className="table-auto">
              <thead>
                <tr className=' border-solid bg-orange-300'>
                 <th className=" px-4 py-2">
                 S.No</th>
                 <th className="border px-4 py-2">Name of student who has bee n placed </th>
                 <th className="border px-4 py-2">Program Graduated From</th>
                 <th className="border px-4 py-2">Name of the  employer with contact details</th>
               </tr>
             </thead>
             <tbody>
                <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">	
                NAVEENA</td>
                <td className="border px-4 py-2">BME</td>
                <td className="border px-4 py-2">Enhancesys Innovation Pvt. Ltd</td>
                </tr>
                <tr className="bg-orange-100">
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">	
                SRINITHI D</td>
                <td className="border px-4 py-2">BME</td>
                <td className="border px-4 py-2">	
                Enhancesys Innovation Pvt. Ltd</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">	
                DIVA.A</td>
                <td className="border px-4 py-2">BME	</td>
                <td className="border px-4 py-2">	Enhancesys Innovation Pvt. Ltd</td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">NAGARJUN M</td>
                <td className="border px-4 py-2">BME</td>
                <td className="border px-4 py-2">Enhancesys Innovation Pvt. Ltd</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">RAHUL. V</td>
                <td className="border px-4 py-2">BME</td>
                <td className="border px-4 py-2">Biovus Blockchain Technologies Pvt ltd</td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">6</td>
                <td className="border px-4 py-2">RAHUL. V</td>
                <td className="border px-4 py-2">BME</td>
                <td className="border px-4 py-2">Biovus Blockchain Technologies Pvt ltd</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">7</td>
                <td className="border px-4 py-2">RAHUL. V</td>
                <td className="border px-4 py-2">BME</td>
                <td className="border px-4 py-2">Biovus Blockchain Technologies Pvt ltd</td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">8</td>
                <td className="border px-4 py-2">RAHUL. V</td>
                <td className="border px-4 py-2">BME</td>
                <td className="border px-4 py-2">Biovus Blockchain Technologies Pvt ltd</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">9</td>
                <td className="border px-4 py-2">RAHUL. V</td>
                <td className="border px-4 py-2">BME</td>
                <td className="border px-4 py-2">Biovus Blockchain Technologies Pvt ltd</td>
                </tr>
                <tr className='bg-orange-100'>
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">RAHUL. V</td>
                <td className="border px-4 py-2">BME</td>
                <td className="border px-4 py-2">Biovus Blockchain Technologies Pvt ltd</td>
                </tr>
                <tr className=''>
                <td className="border px-4 py-2">10</td>
                <td className="border px-4 py-2">RAHUL. V</td>
                <td className="border px-4 py-2">BME</td>
                <td className="border px-4 py-2">Biovus Blockchain Technologies Pvt ltd</td>
                </tr>
             </tbody>
           </table>
         </div>
        </div>
        <div className="flex flex-col w-1/2 py-12 ">
        <Image src={image} alt="Picture of the author" />
        </div>  
      </div>
    </div>
  </div>
    </div>
  )
}

export default page
