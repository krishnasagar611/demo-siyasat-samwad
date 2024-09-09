import dynamic from 'next/dynamic'
const ContactUscomp = dynamic(() => import('../../components/contactusComp/ContactUscomp'), { ssr: false })

type Props = {}

function index({}: Props) {
  return (
    <div>
      <ContactUscomp />
    </div>
  )
}

export default index
