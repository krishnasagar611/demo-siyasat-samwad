'use client'
import { useSelector } from 'react-redux'
import FeatureLayout from '../features-Style/FeatureLayout'
import Layout from '../layout/Layout'
import { settingsData } from 'src/store/reducers/settingsReducer'
import Sidebar from '../features-Style/SideMenu'
import NewsSection from '../features-Style/MidNavbar'
import AddNews from '../features-Style/AddNews'
import { Container, Row, Col } from 'react-bootstrap'
import NewsFeed from '../features-Style/NewsFeed'
import BreakingNewsSidebar from '../features-Style/MidNavbar'

const Home = () => {
  const adsenseData = useSelector(settingsData)
  const adsenseUrl = adsenseData?.web_setting?.google_adsense

  return (
    <Layout>
      {/* <FeatureLayout /> */}
      <Container>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={6}>
            <BreakingNewsSidebar />
            <NewsFeed/>
          </Col>
          <Col md={3}>
            <AddNews />
          </Col>
        </Row>
      </Container>

      {process.env.NEXT_PUBLIC_SEO === 'false' ? (
        (adsenseUrl && adsenseUrl !== null) ||
        (adsenseUrl && adsenseUrl !== undefined) ||
        (adsenseUrl && adsenseUrl?.length > 0) ? (
          <script async src={adsenseUrl} crossOrigin='anonymous'></script>
        ) : null
      ) : null}
    </Layout>
  )
}

export default Home
