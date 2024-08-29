import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const ArticleCard = () => {
  const articles = [
    {
      title: 'Transforming Dreams Through Meals',
      date: '25-07-2024',
      author: 'Admin',
      description: 'Akshaya Patra: Creating a Brave Generation through Mid-Day Meals'
    },
    {
      title: 'Understanding Youth Leadership And Youth-Led Development',
      date: '26-07-2024',
      author: 'Admin',
      description: 'In the past decade, the world has woken up to the power of youth-led development.'
    }
  ]

  return (
    <div style={{ width: '100%', padding: '10px', position: 'sticky', top: '0' }}>
      <Row xs={1} md={1} className='g-4'>
        {articles.map((article, index) => (
          <Col key={index}>
            <Card className=' shadow-sm border-0'>
              <Card.Img variant='top' src='https://via.placeholder.com/150' alt='Article Image' />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text className='text-muted'>
                  {article.date} by {article.author}
                </Card.Text>
                <Card.Text>{article.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ArticleCard
