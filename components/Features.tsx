import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <section className='border-2 border-red-500 flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container relative w-full justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>

        <Image src='/phone.png' alt='phone' width={440} height={1000} className='feature-phone'/>
        </div>
        <div >
          
        </div>
      </div>

    </section>
  )
}

export default Features