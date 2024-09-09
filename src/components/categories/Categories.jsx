'use client'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { IoArrowForwardCircleSharp } from 'react-icons/io5'
import { selectCurrentLanguage } from '../../store/reducers/languageReducer'
import { useSelector } from 'react-redux'
import BreadcrumbNav from '../breadcrumb/BreadcrumbNav'
import Link from 'next/link'
import { settingsData } from '../../store/reducers/settingsReducer'
import { NoDataFound, placeholderImage, translate } from '../../utils'
import { CategoriesApi } from 'src/hooks/categoriesApi'
import { useQuery } from '@tanstack/react-query'
import Layout from '../layout/Layout'
import Card from '../skeletons/Card'
// import NoDataFound from '../noDataFound/NoDataFound'
import { categoriesCacheData } from 'src/store/reducers/CatNavReducers'
import LoadMoreBtn from '../view/adSpaces/loadMoreBtn/LoadMoreBtn'

const Categories = () => {


  const dataPerPage = 9
  const currentLanguage = useSelector(selectCurrentLanguage)


  const categoiresOnOff = useSelector(settingsData)

  const [isLoading, setIsLoading] = useState({
    loading: false,
    loadMoreLoading: false
  })
  const [loadMore, setLoadMore] = useState(false)
  const [categories, setCategories] = useState([])
  const [offset, setOffset] = useState(0)
  const [totalData, setTotalData] = useState('')

  const handleLoadMore = () => {
    setLoadMore(true)
    setOffset(offset + 1)
  }

  // api call
  const categoriesApi = async () => {
    !loadMore ? setIsLoading({ loading: true }) : setIsLoading({ loadMoreLoading: true })
    try {
      const { data } = await CategoriesApi.getCategories({
        offset: offset * dataPerPage,
        limit: dataPerPage,
        language_id: currentLanguage.id
      })
      setTotalData(data.total)
      setIsLoading({ loading: false })
      setIsLoading({ loadMoreLoading: false })
      return data
    } catch (error) {
      console.log(error)
      setCategories([])
      setIsLoading({ loading: false })
    }
  }


  // react query
  const { data: Data } = useQuery({
    queryKey: ['categories', currentLanguage.id, offset],
    queryFn: () => categoriesApi(),
    staleTime: 6000
  })

  useEffect(() => {
    if (Data && Data.data) {
      setCategories((prevData) => [...prevData, ...Data.data]);
    }
  }, [Data])

  useEffect(() => {

  }, [totalData, isLoading])


  // slice the array to get the current posts
  const currentData = Data && Data.data && Data.data.slice(0, dataPerPage)

  const lengthdata = (Data && Data.total) || 0

  return (
 <>
 </>
  )
}

export default Categories
