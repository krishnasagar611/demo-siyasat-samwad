'use client'
import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Link from 'next/link'
import NoDataFound from '../noDataFound/NoDataFound'

const ArticleCard = () => {
  const [adNewsData, setAdNewsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://devserver.siyasatsamwad.com/api/get_ad_space_news_details')
      .then(response => {
        if (!response.data.error && Array.isArray(response.data.data)) {
          setAdNewsData(response.data.data)
          console.log(response.data.data, 'adNewsData')
        } else {
          console.error('Unexpected data structure:', response.data)
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

  if (adNewsData.length === 0) {
    return (
      <div>
        <NoDataFound />
      </div>
    )
  }

  return (
    <div style={{ width: '100%', height: 'auto', padding: '10px', position: 'sticky', top: '0' }}>
      <Row xs={1} md={1} className='g-4'>
        {adNewsData.map((ad, index) => (
          <Col key={ad.id}>
            <Link href={ad.ad_url} target='_blank'>
              <Card className='shadow-sm border-0'>
                <Card.Img variant='top' src={ad.web_ad_image || 'https://via.placeholder.com/150'} alt='Ad Image' />
                <Card.Body>
                  <Card.Title>{ad.ad_space}</Card.Title>
                  <Card.Text className='text-muted'>
                    {ad.date === '0000-00-00' ? 'Date not available' : ad.date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ArticleCard
