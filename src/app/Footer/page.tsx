'use client'

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube} from "react-icons/ai";
import { FaWhatsapp } from 'react-icons/fa6'
import Image from "next/image";
import logo from '../Components/logo.png'
import pic from './logo.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

function Footer() {

    const handleClick = async () => {
  
      if (navigator.userAgent.includes('WhatsApp')) {
        window.open(`whatsapp://send?phone=6382167899`)
      } else {
        window.open('https://web.whatsapp.com/send?phone=6382167899', '_blank');
      }
    }

    const handleClickfb = async () => {
  
      if (navigator.userAgent.includes('WhatsApp')) {
        window.open(`https://www.facebook.com/`)
      } else {
        window.open('https://www.facebook.com/', '_blank');
      }
    }

    const handleClicktw = async () => {
  
      if (navigator.userAgent.includes('WhatsApp')) {
        window.open(`https://x.com/?lang=en`)
      } else {
        window.open('https://x.com/?lang=en', '_blank');
      }
    }

    const handleClickyou = async () => {
  
      if (navigator.userAgent.includes('WhatsApp')) {
        window.open(`https://www.youtube.com/`)
      } else {
        window.open('https://www.youtube.com/', '_blank');
      }
    }

    const handleClickin= async () => {
  
      if (navigator.userAgent.includes('WhatsApp')) {
        window.open(`https://in.linkedin.com/`)
      } else {
        window.open('https://in.linkedin.com/', '_blank');
      }
    }

    const handleClickgoogle= async () => {
  
      if (navigator.userAgent.includes('WhatsApp')) {
        window.open(`https://www.google.com/`)
      } else {
        window.open('https://www.google.com/', '_blank');
      }
    }
    return (
      <>
        <footer className="bg-slate-700">
          <div className=" mx-auto  py-[10rem]">
            <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
              <div className="flex flex-col ml-20">
              
              </div>
              <div className="flex flex-col gap-10 ml-20">
                <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                  <Image 
                  src={logo}  
                  alt="Picture of the author"  
                  width={300}/>
                  </div>
                  <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                      <div onClick={handleClickfb} className="  bg-[#efefef] p-2 rounded-full hover:bg-[#8fff9e]">
                      <FaFacebookF /> 
                      </div>
                      <div onClick={handleClicktw} className="  bg-[#efefef] p-2 rounded-full hover:bg-[#8fff9e]">
                      <AiOutlineTwitter />
                      </div>
                      <div onClick={handleClickyou} className="  bg-[#efefef] p-2 rounded-full hover:bg-[#8fff9e]">
                      <AiFillYoutube /> 
                      </div>
                      <div onClick={handleClickin} className="  bg-[#efefef] p-2 rounded-full hover:bg-[#8fff9e]">
                      <FaLinkedinIn /> 
                      </div>
                      <div onClick={ handleClickgoogle} className="  bg-[#efefef] p-2 rounded-full hover:bg-[#8fff9e]">
                      <FaGoogle />
                      </div>
                  </div>
                  <div>
                <p className="text-[16px] font-medium text-[#faf7f7]">
                  Design by EDhunt Info Tech
                </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 relative py-32 mr-10 ml-10">
                <Image
                 src={pic} 
                 alt="Picture of the author" 
                 width={350}/>
                <p className=" text-[#ffffff] ">
                Salem-Thiruchengode Highway, Mahendhirapuri, Mallasamudram, Namakkal DT, Tamilnadu, India.
                </p>
                <p className=" text-[#ffffff] ">
                  Contact +91 6382167899
                </p>
                <p className=" text-[#fff9f9] ">
                  edhuntinfotech@gmail.com
                </p>
              </div>
            </div>
          </div>
            <div className='bg-green-600 w-min p-2 rounded-full fixed 
          bottom-10 right-4 cursor-pointer md:right-8' onClick={handleClick}>
        <FaWhatsapp color='white' className='w-7 h-7 md:w-10 md:h-10' />
            </div>
        </footer>
      </>
    );
  }
  
  export default Footer; 
  