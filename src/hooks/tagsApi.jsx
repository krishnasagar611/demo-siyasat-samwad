import Api from '../api/AxiosInterceptors'
import { GET_TAG } from '../utils/api'

export const getTagApi = {
  getTag: requestData => {
    const { language_id, slug,limit,offset } = requestData
    return Api.get(GET_TAG, {
      params: {
        language_id,
        slug,
        limit,
        offset
      }
    })
  },
}
