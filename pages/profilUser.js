import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import usersolid from '/assets/circle-user-solid.svg'
import Link from 'next/link'

const ProfilUser = () => {
  return (
    <Layout>
      <div className="mt-10">      
        <div className="flex flex-col items-center">
        <Image src={usersolid} alt="" width={200} height={150} />
          <p className="text-xl mt-5">Nicolas</p>
        </div>
        <div className="flex justify-evenly mt-10">
          <div className="flex flex-col items-center">
          <Link href="/abonne">
            <p className="text-lg cursor-pointer">Abonné(s)</p>
          </Link>
            <p>0</p>
          </div>
          <div className="flex flex-col items-center">
          <Link href="/abonnement">
            <p className="text-lg cursor-pointer">Abonnement(s)</p>
          </Link>
            <p>3</p>
          </div>
        </div>
        <p className='mt-10 ml-5 text-xl'>Email: nico.test@epsi.fr</p>
      </div>
    </Layout>
  )
}

export default ProfilUser