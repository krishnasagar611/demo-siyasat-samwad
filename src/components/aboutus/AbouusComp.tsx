import React from 'react'
import Header from '../layout/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from '../features-Style/SideMenu'
import NoDataFound from '../noDataFound/NoDataFound'
import ArticleCard from '../features-Style/AddNews'
import Footer from '../layout/Footer'

type Props = {}

function AbouusComp({}: Props) {
  return (
    <div>
      <div>
        <Header />
        <Container>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={7}>
              <NoDataFound />
            </Col>
            <Col md={3}>
              <ArticleCard />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  )
}

export default AbouusComp
