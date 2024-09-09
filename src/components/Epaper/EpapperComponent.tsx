'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, Col, Row, Container, Button } from 'react-bootstrap'
import { BsShare, BsDownload } from 'react-icons/bs'
import axios from 'axios'

const EpapperComponent = () => {
  const [newspapers, setNewspapers] = useState([])

  useEffect(() => {
    const fetchNewspapers = async () => {
      try {
        const response = await axios.get('https://devserver.siyasatsamwad.com/api/get_enews')
        if (!response.data.error) {
          setNewspapers(response.data.data)
        }
      } catch (error) {
        console.error('Error fetching newspapers:', error)
      }
    }

    fetchNewspapers()
  }, [])

  return (
    <Container className='mt-3'>
      <Row>
        {newspapers.length > 0 ? (
          newspapers.map((newspaper, index) => (
            <Col md={3} sm={6} key={index} className='mb-4'>
              <Card>
                <Card.Img
                  variant='top'
                  src={`https://images.bhaskarassets.com/thumb/444x294/epaper/mpcg/epaperimages/01092024/31bhopal_metri-pg1-0.jpg`}
                  alt={newspaper.title}
                />
                <Card.Body>
                  <Card.Title className='text-center'>{newspaper.title}</Card.Title>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                  <small className='text-muted'>{newspaper.date}</small>
                  <div>
                    <Link href={`https://devserver.siyasatsamwad.com/${newspaper.document}`} download>
                      <Button variant='link' className='text-decoration-none'>
                        <BsDownload size={15} />
                      </Button>
                    </Link>
                    <BsShare className='ms-2' size={15} />
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>No newspapers available.</p>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default EpapperComponent
