import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ListGroup, ListGroupItem, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import * as IconsModule from 'react-icons/fa'
import AppDownloadSection from './Footer'
import { categoriesCacheData } from '../../store/reducers/CatNavReducers'

const Sidebar = () => {
  const router = useRouter()
  const categories = useSelector(categoriesCacheData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (categories.length > 0) {
      setIsLoading(false)
    }
  }, [categories])

  const handleCategoryClick = category => {
    if (category.slug) {
      router.push(`/categories-news/${category.slug}`)
    }
  }

  const getIconComponent = iconName => {
    return IconsModule[iconName] || IconsModule.FaNewspaper
  }

  return (
    <div style={{ width: '100%', height: 'auto', padding: '10px', position: 'sticky', top: '80px' }}>
      {isLoading ? (
        <ListGroup variant='flush'>
          {[...Array(5)].map((_, index) => (
            <ListGroupItem key={index} className='d-flex align-items-center menu-item'>
              <Spinner animation='border' size='sm' className='mr-2' />
              <span className='placeholder col-8'></span>
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <ListGroup variant='flush'>
          {categories.map(category => {
            const IconComponent = getIconComponent(category.icon)
            return (
              <ListGroupItem
                key={category.id}
                className='d-flex align-items-center menu-item'
                style={{ cursor: 'pointer',fontSize: '20px',fontWeight: 'bold' }}
                onClick={() => handleCategoryClick(category)}
              >
                <IconComponent style={{ marginRight: '10px', color: category.iconColor || '#5e7fd8' }} />
                <span>{category.category_name}</span>
              </ListGroupItem>
            )
          })}
        </ListGroup>
      )}
      <AppDownloadSection />
    </div>
  )
}

export default Sidebar
