'use client'
import Link from 'next/link'
import BreadcrumbNav from '../breadcrumb/BreadcrumbNav'
import { useSelector } from 'react-redux'
import { selectCurrentLanguage } from '../../store/reducers/languageReducer'
import { placeholderImage, translate, NoDataFound } from '../../utils'
import no_image from '../../../public/assets/images/no_image.jpeg'
import { AllBreakingNewsApi } from '../../hooks/allBreakingNewsApi'
import { getLanguage } from '../../utils/api'
import { useQuery } from '@tanstack/react-query'
import Layout from '../layout/Layout'
import Card from '../skeletons/Card'
// import NoDataFound from '../noDataFound/NoDataFound'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArticleCard from '../features-Style/AddNews'
import Sidebar from '../features-Style/SideMenu'

const AllBreakingNews = () => {
  let { id: language_id } = getLanguage()
  const currentlanguage = useSelector(selectCurrentLanguage)

  const router = useRouter()

  const dataPerPage = 1

  const [isLoading, setIsLoading] = useState({
    loading: false,
    loadMoreLoading: false
  })
  const [breakingNewsData, setBreakingNewsData] = useState([])
  const [offset, setOffset] = useState(0)
  const [totalData, setTotalData] = useState('')

  // api call
  const getBreakingNewsApi = async () => {
    setIsLoading({ loading: true })
    try {
      const { data } = await AllBreakingNewsApi.getBreakingNews({
        language_id: language_id,
        // offset: offset * dataPerPage,
        // limit: dataPerPage
      })
      setTotalData(data.total)
      setIsLoading({ loading: false })
      return data.data
    } catch (error) {
      console.log(error)
      setBreakingNewsData([])
      setIsLoading({ loading: false })
    }
  }

  // react query
  const { data: Data } = useQuery({
    queryKey: ['all-breaking-news', language_id, currentlanguage, offset],
    queryFn: getBreakingNewsApi
  })

  useEffect(() => {
    if (Data && Data.length > 0) {
      setBreakingNewsData(prevData => [...prevData, ...Data])
    }
  }, [Data])

  useEffect(() => {}, [totalData, isLoading])

  return (
    <Layout>
      <div id=''>
        <div id='BNV-content' className=''>
          {isLoading.loading ? (
            <div className='row'>
              {[...Array(3)].map((_, index) => (
                <div className='col-md-4 col-12' key={index}>
                  <Card isLoading={true} />
                </div>
              ))}
            </div>
          ) : (
            <>
              <Container>
                <Row>
                  <Col md={2}>
                    <Sidebar />
                  </Col>
                  <Col md={7}>
                    <div className='row my-5'>
                      {Data && Data.length > 0 ? (
                        breakingNewsData.map(element => (
                          <div className='col-md-4 col-12' key={element.id}>
                            <Link
                              id='Link-all'
                              href={{
                                pathname: `/breaking-news/${element.slug}`,
                                query: { language_id: element.language_id }
                              }}
                              as={`/breaking-news/${element.slug}`}
                            >
                              <div id='BNV-card' className='card'>
                                <img
                                  id='BNV-card-image'
                                  src={element.image ? element.image : no_image}
                                  className='card-img'
                                  alt='breaking news image'
                                  onError={placeholderImage}
                                />
                                <div id='BNV-card-body' className='card-body'>
                                  <h5 id='BNV-card-title' className='card-title'>
                                    {element.title.slice(0, 150)}...
                                  </h5>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))
                      ) : (
                        <>{NoDataFound()}</>
                      )}
                    </div>
                  </Col>
                  <Col md={3}>
                    <ArticleCard />
                  </Col>
                </Row>
              </Container>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default AllBreakingNews
