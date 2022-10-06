import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import usersolid from '/assets/circle-user-solid.svg'

const ProfilUser = () => {
  return (
    <Layout>
      <div className="mt-10">      
        <div className="flex flex-col items-center">
        <Image src={usersolid} alt="" width={200} height={150} />
          <p class="text-xl mt-5">Nicolas</p>
        </div>
        <div className="flex justify-evenly mt-10">
          <div className="flex flex-col items-center">
            <p className="text-lg">Abonné(s)</p>
            <p>0</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg">Abonnement(s)</p>
            <p>3</p>
          </div>
        </div>
        <p className='mt-10 ml-5 text-xl'>Email: nico.test@epsi.fr</p>
      </div>
    </Layout>
  )
}

export default ProfilUser