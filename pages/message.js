import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import eric from '/assets/eric.jpg'
import SendMessage from '../components/SendMessage'

const Message = () => {
  return (
    <Layout>
        <div className="flex justify-evenly items-center mt-10">
          <Image src={eric} class="profilImg" alt="PP Eric" width={100} height={100} />
          <p>Vous Discuter avec Eric</p>
        </div>
        <div className="mt-full">
          <SendMessage />
        </div>
    </Layout>
  )
}

export default Message