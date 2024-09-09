import Api from '../api/AxiosInterceptors'
import { GET_AD_SPACE_NEWS_DETAILS } from '../utils/api'

export const getAdsSpaceNewsDetailsApi = {
  getAdsSpaceNewsDetails: requestData => {
    const { language_id } = requestData
    return Api.get(GET_AD_SPACE_NEWS_DETAILS, {
      params: {
        language_id
      }
    })
  }
}
