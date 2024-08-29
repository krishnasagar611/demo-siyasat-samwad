import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaLink } from 'react-icons/fa'
import axios from 'axios'
import Link from 'next/link'

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching news data:', error)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      {isLoading
        ? [...Array(10)].map((_, index) => (
            <Card className='mb-3 border-0' key={index}>
              <Row className='g-0'>
                <Col md={10}>
                  <div className='placeholder-glow'>
                    <span className='placeholder col-12'></span>
                  </div>
                </Col>
                <Col md={2} className='d-flex align-items-center'>
                  <div className='placeholder-glow' style={{ width: '100%', height: '100px' }}>
                    <span className='placeholder col-12 h-100'></span>
                  </div>
                </Col>
              </Row>
            </Card>
          ))
        : newsData.map(news => (
            <Link href={`/news/${news.slug}`} key={news.id} passHref>
              <Card className='mb-3 border-0'>
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
            </Link>
          ))}
    </div>
  )
}

export default NewsFeed
