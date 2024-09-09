import Api from '../api/AxiosInterceptors'
import { GET_FEATURE_SECTION_BY_ID } from '../utils/api'
import { GET_FEATURE_SECTION } from '../utils/api'

export const getFeatureSectionApi = {
  getFeatureSectionById: requestData => {
    const { language_id, offset, limit, slug, latitude, longitude, section_id } = requestData
    return Api.get(GET_FEATURE_SECTION_BY_ID, {
      params: {
        language_id,
        offset,
        limit,
        slug,
        latitude,
        longitude,
        section_id
      }
    })
  },
  getFeatureSection: requestData => {
    const { language_id, offset, limit, slug, latitude, longitude, section_id } = requestData
    return Api.get(GET_FEATURE_SECTION, {
      params: {
        language_id,
        offset,
        limit,
        slug,
        latitude,
        longitude,
        section_id
      }
    })
  }
}
