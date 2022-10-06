import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import eric from '/assets/eric.jpg'
import tomates from '/assets/tomates.jpeg'
import Link from 'next/link'

const Produit = () => {
  return (
    <Layout>
      <div>
        <div className="m-5 flex items-center">
          <Image src={eric} class="profilImg" alt="PP Eric" width={200} height={200} />
          <p className='text-2xl ml-5'>Eric est à 3km de chez vous</p>
        </div>
        <div className='m-5'>
        <Image src={tomates} className="imgProduit" alt="Images tomates" width={550} height='200' />
        </div>
        <div className='m-5'>
          <p className='text-xl'>Tomates du jardin</p>
          <p className='mt-5'>Je vends les tomates de mon jardin. J’ai différentes variétés comme les coeurs de boeuf, ananas, noire de crimée...</p>
        </div>
        <div className='m-5 flex justify-between mt-72'>
          <p>Prix: 2€/Kg</p>
          <Link href="/message">
          <button className="btn bg-[#1B7E31] hover:bg-green-600">Messsage</button>
         </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Produit