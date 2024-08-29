import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaLink } from 'react-icons/fa'
import axios from 'axios'

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('https://devserver.siyasatsamwad.com/api/get_news', {
        params: {
          offset: 0,
          limit: 10,
          language_id: 1
          // category_id: 1,
        }
      })
      .then(response => {
        if (!response.data.error) {
          setNewsData(response.data.data)
        }
      })
      .catch(error => {
        console.error('Error fetching news data:', error)
      })
  }, [])

  return (
    <div className=''>
      {newsData.map(news => (
        <Card className='mb-3 border-0' key={news.id}>
          <Row className='g-0'>
            <Col md={10}>
              <Card.Body>
                <Card.Title className='fw-bold' style={{ color: '#32a852' }}>
                  {news.title}
                </Card.Title>
                <Card.Text className='text-muted'>{news.category.category_name}</Card.Text>
              </Card.Body>
            </Col>
            <Col md={2} className='d-flex align-items-center'>
              <div style={{ position: 'relative' }}>
                <img src={news.image} alt={news.title} className='img-fluid rounded' />
                {/* If there's a video duration, display it */}
                {news.videoDuration && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: '#fff',
                      padding: '2px 5px',
                      borderRadius: '3px',
                      fontSize: '0.8rem'
                    }}
                  >
                    {news.videoDuration}
                  </span>
                )}
              </div>
            </Col>
          </Row>
          <Card.Footer className='bg-white border-0'>
            <div className='d-flex justify-content-end'>
              <FaFacebook style={{ cursor: 'pointer', marginRight: '10px' }} />
              <FaTwitter style={{ cursor: 'pointer', marginRight: '10px' }} />
              <FaLink style={{ cursor: 'pointer' }} />
            </div>
          </Card.Footer>
        </Card>
      ))}
    </div>
  )
}

export default NewsFeed
