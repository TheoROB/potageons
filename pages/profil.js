import React from 'react'
import Layout from '../components/Layout'
import tomates from '/assets/tomates.jpeg'
import eric from '/assets/eric.jpg'
import Image from 'next/image'


const Profil = () => {
  return (
    <Layout>
      <div className="flex justify-around items-center mt-10">
        <Image src={eric} class="profilImg" alt="PP Eric" width={100} height={100} />
        <div>
          <p className="text-2xl">Eric</p>
          <p className="text-[#6D6D6D]">à 3km de chez vous</p>
        </div>
      </div>
      <div className='m-5'>
        <p class="text-xl mt-10 mb-5">Vends :</p> 
        <Image src={tomates} className="imgProduit" alt="Images tomates" width={550} height='200' />
        <div class="flex justify-between mt-2">
            <p>Tomates</p>
            <p class="mr-3">2€/kg</p>
        </div>
      </div>
      
    </Layout>  
    )
}

export default Profil