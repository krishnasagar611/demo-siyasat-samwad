'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Form, Button, Alert, Card, Container } from 'react-bootstrap'
// import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  message: yup.string().required('Message is required')
})

export default function ContactUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    // resolver: yupResolver(schema),
  })

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitStatus('success')
    reset()
  }

  return (
    <Container className='min-vh-100 d-flex align-items-center justify-content-center'>
      <Card className='shadow-lg' style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Title className='text-center'>Contact Us</Card.Title>
          <Card.Text className='text-muted text-center mb-4'>
            We'd love to hear from you. Please fill out this form.
          </Card.Text>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Name field */}
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='John Doe' {...register('name')} isInvalid={!!errors.name} />
              
              <Form.Control.Feedback type='invalid'>{errors.name?.message as string}</Form.Control.Feedback>
            </Form.Group>

            {/* Email field */}
            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='john@example.com'
                {...register('email')}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>{errors.email?.message as string}</Form.Control.Feedback>
            </Form.Group>

            {/* Phone Number field */}
            <Form.Group className='mb-3'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='text'
                placeholder='1234567890'
                {...register('phoneNumber')}
                isInvalid={!!errors.phoneNumber}
              />
              <Form.Control.Feedback type='invalid'>{errors.phoneNumber?.message as string}</Form.Control.Feedback>
            </Form.Group>

            {/* Message field */}
            <Form.Group className='mb-3'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={4}
                placeholder='Your message here...'
                {...register('message')}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type='invalid'>{errors.message?.message as string}</Form.Control.Feedback>
            </Form.Group>

            {/* Submit button */}
            <Button variant='primary' type='submit' disabled={isSubmitting} className='w-100'>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Success Alert */}
      {submitStatus === 'success' && (
        <Alert variant='success' className='mt-3'>
          Your message has been sent successfully!
        </Alert>
      )}
    </Container>
  )
}