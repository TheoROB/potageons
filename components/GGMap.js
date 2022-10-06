import React from 'react'
import map from '../assets/map.png'
import Image from 'next/image'

const GGMap = () => {
  return (
    <div>
      <h1 className="font-bold text-xl ml-3 mt-5 mb-10">MAP:</h1>
      <div className="flex justify-center">
        <Image className="mt-10" src={map} alt="this is car image" width={500} height={300} />
      </div>
    </div>
  )
}

export default GGMap
