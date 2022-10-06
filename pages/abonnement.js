import React from 'react'
import Layout from '../components/Layout'
import eric from '../assets/eric.jpg'
import sarah from '../assets/sarah.PNG'
import ema from '../assets/ema.PNG'
import Image from 'next/image'


function Abonnement() {
  return (
    <Layout>
      <div>
        <p class="text-xl m-5">Abonnement(s)</p>
        <div className='m-5 flex flex-col h-44 justify-between'>
          <div className='flex items-center'>
            <Image src={eric} class="profilImg" alt="PP Eric" width={50} height={50} />
            <p className='ml-5'>Eric</p>
          </div>
          <div className='flex items-center'>
            <Image src={sarah} class="profilImg" alt="PP Sarah" width={50} height={50} />
            <p className='ml-5'>Sarah</p>
          </div>
          <div className='flex items-center'>
            <Image src={ema} class="profilImg" alt="PP Ema" width={50} height={50} />
            <p className='ml-5'>Ema</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Abonnement