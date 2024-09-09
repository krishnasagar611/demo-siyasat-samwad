'use client'

import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import moment from 'moment/moment'
import { useSelector } from 'react-redux'
import { selectCurrentLanguage } from '../../store/reducers/languageReducer'
import { placeholderImage, translate } from '../../utils'
import { settingsData } from '../../store/reducers/settingsReducer'
import { useQuery } from '@tanstack/react-query'
import { FaLocationDot, FaSquareXTwitter } from 'react-icons/fa6'
import { categoriesCacheData } from '../../store/reducers/CatNavReducers'
import { checkNewsDataSelector } from '../../store/reducers/CheckNewsDataReducer'
import { IoMdMail } from 'react-icons/io'
import { MdCall } from 'react-icons/md'
import Image from 'next/image'

import playStore from '../../../public/assets/images/playStore.svg'
import appleStore from '../../../public/assets/images/appleStore.svg'

const Footer = () => {
  const settings = useSelector(settingsData)

  const categories = useSelector(categoriesCacheData)

  const categoriesData = categories

  const checkNewsData = useSelector(checkNewsDataSelector)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section id='footer'>
        <div className='copyRightWrapper'>
          <div className='container d-flex copyright'>
            <div>
              <p id='footer-Copyright' className='h6 p-2'>
                {translate('copyright')} © {moment().year()} {translate('allrights')}{' '}
                <span className='webName'>{`SiyasatSamwad`}</span>
              </p>
            </div>
            <div className='ms-2'>
              <Link href='/terms-condition'> Terms & Condition |</Link>
              <Link href='privacy-policy'> Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
