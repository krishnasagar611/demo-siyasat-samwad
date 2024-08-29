import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaLink } from 'react-icons/fa'

const NewsFeed = () => {
  const newsData = [
    {
      id: 1,
      title:
        'कोलकाता रेप-मर्डर केस, बंगाल बंद में हिंसा: भाजपा नेता की कार पर फायरिंग, बम फेंके; ममता बोलीं- 16 दिन से CBI जांच जारी, कहां है न्याय',
      category: 'देश',
      image: '/assets/images/bhasker_.webp',
      videoDuration: '2:28'
    },
    {
      id: 2,
      title:
        'भास्कर एक्सप्लेनर- क्या UPS से 19% पेंशन बढ़ेगी: 8वें वेतन आयोग से क्या फर्क पड़ेगा; लंबी सर्विस में NPS बेहतर, 9 सवालों के जवाब',
      category: 'भास्कर एक्सप्लेनर',
      image: '/assets/images/bhasker_.webp',
      videoDuration: '4:12'
    },
    {
      id: 3,
      title:
        'देश का मानसून ट्रैकर: गुजरात के 13 जिलों में 200mm से ज्यादा बारिश, 18 जिलों में बाढ़; 15 की जान गई, सेना तैनात',
      category: 'देश',
      image: '/assets/images/bhasker_.webp',
      videoDuration: '1:28'
    }
  ]

  return (
    <div className='container mt-4'>
      {newsData.map(news => (
        <Card className='mb-3 border-0' key={news.id}>
          <Row className='g-0'>
            <Col md={10}>
              <Card.Body>
                <Card.Title className='fw-bold' style={{ color: '#32a852' }}>
                  {news.title}
                </Card.Title>
                <Card.Text className='text-muted'>{news.category}</Card.Text>
              </Card.Body>
            </Col>
            <Col md={2} className='d-flex align-items-center'>
              <div style={{ position: 'relative' }}>
                <img src={news.image} alt={news.title} className='img-fluid rounded' />
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
