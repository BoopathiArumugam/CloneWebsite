import Image from 'next/image'
import React from 'react'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.webp'
import pic6 from './pic6.webp'
import pic7 from './pic7.webp'
import pic8 from './pic8.webp'
import pic9 from './pic9.jpg'
import pic10 from './pic10.webp'
import pic11 from './pic11.webp'
import pic12 from './pic12.webp'
import pic13 from './pic13.webp'
import pic14 from './pic14.webp'
import pic15 from './pic15.webp'
import pic16 from './pic16.webp'
import pic17 from './pic17.webp'
import pic18 from './pic18.webp'

const page = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-5">
      <div>
      <Image src={pic1} alt="Picture of the author" className='h-auto max-w-full rounded-lg '/>
      </div>
      <div>
      <Image src={pic2}  alt="Picture of the author"className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic3} alt="Picture of the author" className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic5} alt="Picture of the author" className='h-auto max-w-full w-700 rounded-lg'/>
      </div>
      <div>
      <Image src={pic6} alt="Picture of the author"  className='h-auto w-500 max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic7} alt="Picture of the author" width={600} className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic8} alt="Picture of the author" className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic9} alt="Picture of the author" className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic10} alt="Picture of the author" className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic11} alt="Picture of the author" className='h-auto max-w-full w-700 rounded-lg'/>
      </div>
      <div>
      <Image src={pic4} alt="Picture of the author" className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic12} alt="Picture of the author" className='h-auto w-500 max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic13} alt="Picture of the author" className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic14} alt="Picture of the author" className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic15} alt="Picture of the author" className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic16} alt="Picture of the author" className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic17} alt="Picture of the author" className='h-auto max-w-full rounded-lg'/>
      </div>
      <div>
      <Image src={pic18} alt="Picture of the author" className='h-auto max-w-full rounded-lg'/>
      </div>
      </div>
  )
}

export default page
