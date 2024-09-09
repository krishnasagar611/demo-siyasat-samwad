"use client";
import React from 'react'
import Header from '../layout/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from '../features-Style/SideMenu'
import ArticleCard from '../features-Style/AddNews'
import Footer from '../layout/Footer'
import ContactUsForm from './ContactUsForm'

type Props = {}

function ContactUscomp({}: Props) {
  return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={7}>
              <ContactUsForm />
            </Col>
            <Col md={3}>
              <ArticleCard />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
  )
}

export default ContactUscomp
