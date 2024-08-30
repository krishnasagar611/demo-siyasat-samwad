import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Link from 'next/link'

const ArticleCard = () => {
  const [adNewsData, setAdNewsData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://devserver.siyasatsamwad.com/api/get_ad_space_news_details', {
        params: {
          language_id: 1
        }
      })
      .then(response => {
        if (!response.data.error) {
          setAdNewsData(response.data.data.ad_spaces_top)
          console.log(response.data.data.ad_spaces_top, 'adNewsData')
        }
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching news data:', error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!adNewsData) {
    return <div>No data available</div>
  }

  return (
    <div style={{ width: '100%', height: 'auto', padding: '10px', position: 'sticky', top: '0' }}>
      <Row xs={1} md={1} className='g-4'>
        <Col>
          <Card className='shadow-sm border-0'>
            <Card.Img
              variant='top'
              src={adNewsData.web_ad_image || 'https://via.placeholder.com/150'}
              alt='Add Image'
            />
            <Card.Body>
              <Card.Title>{adNewsData.ad_space}</Card.Title>
              <Card.Text className='text-muted'>
                {adNewsData.date === '0000-00-00' ? 'Date not available' : adNewsData.date} by Author
              </Card.Text>
              <Link href={adNewsData.ad_url}>
                <Card.Text>{adNewsData.ad_url}</Card.Text>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ArticleCard
