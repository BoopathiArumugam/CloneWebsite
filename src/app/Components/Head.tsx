import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo-wide.png'
import logo1 from './logo.png'
import logo2 from './naac.png'
import logo3 from './NBA.png'
import logo4 from './AnnaUniv.png'
import logo5 from './NIRF.png'

const Home = () => {

    
  return (
    <div className='w-full h-32 overflow-hidden py-4'> 
    <div className='flex justify-between items-center h-full w-full  xl:px-24 py-10'>
    <Link href='/' >
    <Image
      src={Logo}
      alt="Picture of the author"
      width={1000}
      height={750}
    />
    </Link>
    <div className='hidden sm:flex'>
        <ul className='hidden sm:flex'>
        <li className='ml-3'>
            <Image src={logo3}  alt="Picture of the author"  width={150} height={50}/>
            </li>
            <li className='ml-3'>
            <Image src={logo4}  alt="Picture of the author"   width={150} height={50}/>
            </li>
            <li className='ml-3'>
            <Image src={logo5}  alt="Picture of the author"   width={150} height={50}/>
            </li>
           <li className='ml-5'>
            <Image src={logo2}  alt="Picture of the author"  width={100} height={50}/>
            </li>
            <li className='ml-10'>
            <Image src={logo1}  alt="Picture of the author"  width={100} height={50}/>
            </li>
           
        </ul>
    </div>
    </div>
    </div>
  )
}

export default Home