import dynamic from 'next/dynamic'
const AbouusComp = dynamic(() => import('../../components/aboutus/AbouusComp'), { ssr: false })

type Props = {}

function index({}: Props) {
  return (
    <div>
      <AbouusComp />
    </div>
  )
}

export default index
