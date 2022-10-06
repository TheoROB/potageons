import React from 'react'
import Layout from '../components/Layout'
import tomates from '/assets/tomates.jpeg'
import eric from '/assets/eric.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Profil = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-between">
      <div className="flex justify-around items-center mt-10">
        <Image src={eric} class="profilImg" alt="PP Eric" width={100} height={100} />
        <div>
          <p className="text-2xl">Eric</p>
          <p className="text-[#6D6D6D]">à 3km de chez vous</p>
        </div>
      </div>
      <div className='m-5'>
        <p className="text-xl mt-10 mb-5">Vends :</p> 
        <Link href="/produit">
        <Image src={tomates} className="imgProduit cursor-pointer" alt="Images tomates" width={550} height='200' />
        </Link>
        <div className="flex justify-between mt-2">
            <p>Tomates</p>
            <p className="mr-3">2€/kg</p>
        </div>
      </div>
        <div className='flex justify-center'>
        <Link href="/message">
          <button className="btn bg-[#1B7E31] hover:bg-green-600 mt-36 w-44">Messsage</button>
        </Link>
        </div>
      </div>
    </Layout>  
    )
}

export default Profil