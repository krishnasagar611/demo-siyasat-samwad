import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaShareAlt, FaNewspaper } from 'react-icons/fa'
import { selectCurrentLanguage } from '../../store/reducers/languageReducer'
import { AllBreakingNewsApi } from 'src/hooks/allBreakingNewsApi'
import { getLanguage } from 'src/utils/api'
import { useQuery } from '@tanstack/react-query'
import { placeholderImage, translate } from '../../utils'

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
    <div style={{ width: '100%',paddingTop:"10px" }}>
      {isLoading ? (
        [...Array(dataPerPage)].map((_, index) => (
          <Card className='mb-4' key={index}>
            <Row noGutters>
              <Col md={12}>
                <div className='placeholder-glow'>
                  <span className='placeholder col-12'></span>
                </div>
              </Col>
            </Row>
          </Card>
        ))
      ) : breakingNewsData && breakingNewsData.length > 0 ? (
        breakingNewsData.map(element => (
          <Link
            href={{ pathname: `/breaking-news/${element.slug}`, query: { language_id: element.language_id } }}
            as={`/breaking-news/${element.slug}`}
            key={element.id}
            passHref
          >
            <Card className='mb-4' key={element.id}>
              <Row noGutters>
                <Col md={12} className='position-relative'>
                  <Card.Img
                    src={element.image ? element.image : '/assets/images/no_image.jpeg'}
                    alt='breaking news thumbnail'
                    onError={placeholderImage}
                  />
                </Col>
                <Col md={12}>
                  <Card.Body>
                    <Card.Title className='h5'>{element?.title.slice(0, 50)}...</Card.Title>
                    <Card.Text dangerouslySetInnerHTML={{ __html: element.description.slice(0, 100) }} />
                    <Row>
                      <Col className='text-right'>
                        <FaFacebook style={{ marginRight: '10px', cursor: 'pointer' }} />
                        <FaTwitter style={{ marginRight: '10px', cursor: 'pointer' }} />
                        <FaShareAlt style={{ cursor: 'pointer' }} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Link>
        ))
      ) : (
        <Card className='mb-4'>
          <Card.Body>No breaking news available</Card.Body>
        </Card>
      )}
    </div>
  )
}

export default BreakingNewsSidebar
