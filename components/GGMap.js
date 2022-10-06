import React from 'react'
import map from '../assets/map.png'
import Image from 'next/image'

const GGMap = () => {
  return (
    <div>
      <h1 className="text-xl m-5">MAP:</h1>
      <div className="flex justify-center m-5">
        <Image className="mt-10" src={map} alt="this is car image" width={600} height={300} />
      </div>
    </div>
  )
}

export default GGMap
