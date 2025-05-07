import images from '@/components/constants/images'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex bg-primary pt-8 h-[1400px] rounded-b-[200px] '>
        <div className='flex flex-col w-full gap-18'>
            <div className='flex justify-evenly items-center'>
                <div className='text-[80px] font-bold text-white mazzard'>iHealth</div>
                <div className='flex items-center gap-2'>
                    <div className='text-white text-base mazzard'>Register for free</div>
                    <Link href="" className='text-base text-primary button-bg px-10 py-2 rounded-full'> Login </Link>
                </div>
                <div className='flex w-[471px] h-[57px] justify-center items-center'>
                    <div className='text-white text-base w-[317px] mazzard'>Choose your preferred doctor and time to  book an appointment or consultation</div>
                    <div className='flex gap-2 '>
                        <div className='h-[57px] px-7 bg-[#D9D9D9] rounded-xl'></div>
                        <Image alt="Chat Line" src={images.chatImage.chatline} width={57} height={57}></Image>
                    </div>
                </div>  
            </div>
            <div className='flex justify-evenly items-center mb-12'>
                <p className='text-[80px] w-[785px] font-bold text-white'>Connect, Consult, and Care Remotely</p>
                <div className='flex flex-col w-[280px] h-[186px]'>
                    <p className='text-white w-full h-full '>Get high-quality service with quality telemedecine. Take control of your health and experience the benefits of telemedecine with our platform</p>
                    <div className='flex h-48 items-center gap-2'>
                        <div className=''>
                            <button className='w-full button-bg text-lg py-3 px-16 rounded-full'>Lets Talk!</button>
                        </div>
                        <div className='w-16 h-16'>
                            <Image alt='playbutton' src={images.playButton.playbutton} className='w-full h-full object-fit'>
                            </Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-around items-center w-full '>
                <div className='flex items-center'>
                    <Image alt='wind' src={images.wingImage.wings}></Image>
                    <p className='w-[189px] text-white'>2023 The world&apos;s best digital Health Care Needs</p>
                </div>
                <div className='w-[200px]'>
                    <div></div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center'>
                        <div className='flex'>
                            <div className='bg-[#5A6282] py-6 px-6 rounded-full'></div>
                            <div className='bg-[#F5F6E3] py-6 px-6 rounded-full -ml-5'></div>
                            <div className='bg-[#9CC4E1] py-6 px-6 rounded-full -ml-5'></div>
                        </div>
                        <p className='text-white text-5xl mazzard'>834+</p>
                    </div>
                    <div className='flex justify-center items-center gap-12'  >
                        <div className='bg-[#9CC4E1] py-2 px-2 rounded-full'></div>
                        <p className='text-white'>New User</p>
                    </div>
                </div>
            </div>
            <div className='relative h-full flex mt-12  items-center justify-center  py-2'>
                    <div className=' absolute left-20 -bottom-46 w-[500px] h-[777px]'>
                        <Image alt='rectangle' src={images.blueRec.bluerectangle} className='w-full h-full object-contain'></Image>
                    </div>
                    <div className=' absolute -bottom-23 card w-[514px] h-[957px] bg-white'>
                        <div className='w-[514px] h-[957px] rounded-b-[200px] z-100'>
                            <Image src={images.midRec.midrec} alt='middle'></Image>
                        </div>
                    </div>
                    <div className='absolute w-[514px] h-[797px] -ml-80 right-25 -bottom-65 z-2'>
                        <Image alt='woman' src={images.womanImage.woman} className='w-full h-full object-contain'></Image>
                    </div>
                    <div className='absolute -bottom-34 clear-start z-12  '>
                        <Image src={images.frame.frame}  alt ="frame"></Image>
                    </div>
                    
                    <div className='bg-[#f5f6e4] w-[400px] z-3 absolute h-[120px] -bottom-28 rounded-tl-[80px] right-21 '></div>
                    <div className='bg-[#f5f6e4] w-[400px] absolute h-[100px] -bottom-25 rounded-tr-[80px] left-21'></div>
                    <div className='absolute w-[340px] h-[100px] -bottom-45 rounded-b-full '></div>
            </div>
        </div>
    </div>
  )
}

export default Hero