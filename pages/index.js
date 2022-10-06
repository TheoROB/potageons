import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import eric from '/assets/eric.jpg'
import sarah from '/assets/sarah.PNG'
import ema from '/assets/ema.PNG'
import tomates from '/assets/tomates.jpeg'
import courgette from '/assets/courgette.jpg'
import pdt from '/assets/PommeDeTerre.PNG'
import charle from '/assets/Charle.PNG'
import carotte from '/assets/Carotte.PNG'
import tibo from '/assets/Tibo.PNG'
import melon from '/assets/Melon.PNG'
import Link from 'next/link'


export default function Home() {
  return (
    <Layout>
      <div>
        <form action="" class="relative mx-auto w-max mt-5">
          <input type="search" 
                class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </form>
        <div className="m-7">
          <div className="flex items-center mb-5">
            <Link href='/profil'>
              <Image src={eric} class="profilImg cursor-pointer" alt="PP Eric" width={50} height={50} />
            </Link>
            <p className="ml-5">Eric à 3km</p>
          </div>
          <Image src={tomates} className="imgProduit" alt="Images tomates" width={550} height='200' />
          <div class="flex justify-between mt-2">
            <p>Tomates</p>
            <p class="mr-3">2€/kg</p>
          </div>
        </div>
        <div className="m-7">
          <div className="flex items-center mb-5">
            <Image src={sarah} class="profilImg" alt="PP Eric" width={50} height={50} />
            <p className="ml-5">Sarah à 15km</p>
          </div>
          <Image src={courgette} className="imgProduit" alt="Images tomates" width={550} height='200' />
          <div class="flex justify-between mt-2">
            <p>Courgettes</p>
            <p class="mr-3">2,10€/kg</p>
          </div>
        </div>
        <div className="m-7">
          <div className="flex items-center mb-5">
            <Image src={ema} class="profilImg" alt="PP Eric" width={50} height={50} />
            <p className="ml-5">Ema à 23km</p>
          </div>
          <Image src={pdt} className="imgProduit" alt="Images tomates" width={550} height='200' />
          <div class="flex justify-between mt-2">
            <p>Pommes de terre</p>
            <p class="mr-3">1,80€/kg</p>
          </div>
        </div>
        <div className="m-7">
          <div className="flex items-center mb-5">
            <Image src={charle} class="profilImg" alt="PP Eric" width={50} height={50} />
            <p className="ml-5">Charles à 24km</p>
          </div>
          <Image src={carotte} className="imgProduit" alt="Images tomates" width={550} height='200' />
          <div class="flex justify-between mt-2">
            <p>Carottes</p>
            <p class="mr-3">2,60€/kg</p>
          </div>
        </div>
        <div className="m-7">
          <div className="flex items-center mb-5">
            <Image src={tibo} class="profilImg" alt="PP Eric" width={50} height={50} />
            <p className="ml-5">Tibo à 30km</p>
          </div>
          <Image src={melon} className="imgProduit" alt="Images tomates" width={550} height='200' />
          <div class="flex justify-between mt-2">
            <p>Melons</p>
            <p class="mr-3">3,60€/kg</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
