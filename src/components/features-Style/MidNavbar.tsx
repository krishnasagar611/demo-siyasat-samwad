import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card, ListGroup } from 'react-bootstrap'
import { FaNewspaper } from 'react-icons/fa'
import { selectCurrentLanguage } from '../../store/reducers/languageReducer'
import { AllBreakingNewsApi } from 'src/hooks/allBreakingNewsApi'
import { getLanguage } from 'src/utils/api'
import { useQuery } from '@tanstack/react-query'
import { placeholderImage, translate } from '../../utils'
// import  from '../../../public/assets/images/no_image.jpeg'

const BreakingNewsSidebar = () => {
  const router = useRouter()
  const currentLanguage = useSelector(selectCurrentLanguage)

  const language = getLanguage()
  const language_id = language ? language.id : undefined

  const [breakingNewsData, setBreakingNewsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const dataPerPage = 3 

  const getBreakingNewsApi = async () => {
    setIsLoading(true)
    try {
      const { data } = await AllBreakingNewsApi.getBreakingNews({
        language_id: language_id,
        offset: 0,
        limit: dataPerPage
      })
      setIsLoading(false)
      return data.data
    } catch (error) {
      console.log(error)
      setBreakingNewsData([])
      setIsLoading(false)
    }
  }

  const { data: Data } = useQuery({
    queryKey: ['sidebar-breaking-news', language_id, currentLanguage],
    queryFn: getBreakingNewsApi
  })

  useEffect(() => {
    if (Data) {
      setBreakingNewsData(Data)
    }
  }, [Data])

  return (
    <Card style={{ width: '100%', padding: '10px' }}>
      <Card.Header className='d-flex align-items-center'>
        <FaNewspaper style={{ marginRight: '10px' }} />
        <span>{translate('breakingNewsLbl')}</span>
      </Card.Header>
      <ListGroup variant='flush'>
        {isLoading ? (
          [...Array(dataPerPage)].map((_, index) => (
            <ListGroup.Item key={index}>
              <div className='placeholder-glow'>
                <span className='placeholder col-12'></span>
              </div>
            </ListGroup.Item>
          ))
        ) : breakingNewsData && breakingNewsData.length > 0 ? (
          breakingNewsData.map(element => (
            <ListGroup.Item key={element.id}>
              <Link
                href={{ pathname: `/breaking-news/${element.slug}`, query: { language_id: element.language_id } }}
                as={`/breaking-news/${element.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className=''>
                  <img
                    src={element.image ? element.image : '/assets/images/no_image.jpeg'}
                    alt='breaking news thumbnail'
                   
                    onError={placeholderImage}
                  />
                  <div>
                    <h6 className='mb-0'>{element.title.slice(0, 50)}...</h6>
                  </div>
                </div>
              </Link>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No breaking news available</ListGroup.Item>
        )}
      </ListGroup>
    </Card>
  )

}
export default BreakingNewsSidebar
