
import dynamic from 'next/dynamic'
const CategoryNews = dynamic(() => import('../../components/newsType/News/CategoryNews'), { ssr: false })
const index = () => {
  return (
    <>
      {/* <Meta title='categories news' description='' keywords='' ogImage='' pathName='' schema='' /> */}
      <CategoryNews />
    </>
  )
}

export default index
