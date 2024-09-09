import Api from '../api/AxiosInterceptors'
import { GET_QUESTION } from '../utils/api'
import { GET_QUESTION_RESULT } from '../utils/api'

export const getQuestionApi = {
    getQuestion: requestData => {
        const { language_id, user_id } = requestData
        return Api.get(GET_QUESTION, {
            params: {
                language_id,
                user_id,
            }
        })
    },
    getQuestionResult: requestData => {
        const { language_id, question_id } = requestData
        return Api.get(GET_QUESTION_RESULT, {
            params: {
                language_id,
                question_id,
            }
        })
    }
}