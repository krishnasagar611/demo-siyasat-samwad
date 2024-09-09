import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const AppDownloadSection = () => {
  return (
    <div className='text-center mt-3'>
      <p>Download App from</p>
      <Button variant='link' href='https://play.google.com/store' target='_blank' className='p-0 mb-3'>
        <img src='/assets/images/playstore-a.58f8fbd8.svg' alt='Google Play' />
      </Button>
      <Button variant='link' href='https://www.apple.com/app-store/' target='_blank' className='p-0'>
        <img src='/assets/images/playstore-ios.9242fa03.svg' alt='App Store' />
      </Button>
      <div className='mt-3'>
        <p>Follow us on</p>
        <div className='d-flex justify-content-start'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <FaFacebookF size={30} color='#3b5998' />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <FaTwitter size={32} color='#1da1f2' />
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <FaInstagram size={32} color='#e4405f' />
          </a>
          <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <FaYoutube size={32} color='#ff0000' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppDownloadSection
