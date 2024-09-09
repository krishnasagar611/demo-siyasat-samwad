import dynamic from 'next/dynamic'
import Meta from '../../components/seo/Meta'
const TagNewsview = dynamic(() => import('../../components/tag/TagNewsview'), { ssr: false })
const index = () => {
  return (
    <>
      <Meta title='tag' description='' keywords='' ogImage='' pathName='' schema='' />
      <TagNewsview />
    </>
  )
}

export default index
