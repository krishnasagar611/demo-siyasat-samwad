import React from 'react'
import dynamic from 'next/dynamic'
const Epaper = dynamic(() => import('../../components/Epaper/Epaper'), { ssr: false })


type Props = {}

function index({}: Props) {
  return (
    <div>
      <Epaper />
    </div>
  )
}

export default index
