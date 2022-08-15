import {
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAIL,
    LANGUAGE_UPDATE_REQUEST
} from '../constants/articleConstants';

// Reducer function to handle aricle listing
export const articleListReducer = (state = { articles: {} }, action) => {

    switch (action.type) {
      case ARTICLE_LIST_REQUEST:
        return { loading: true, articles: {} }

      case ARTICLE_LIST_SUCCESS:
        return {
          loading: false,
          articles: action.payload,
        }

      case ARTICLE_LIST_FAIL:
        return { loading: false, error: action.payload }

      default:
        return state
    }
}

// Reducer function to handle language change
export const languageReducer = (state = { language: 'en'}, action) => {

  switch (action.type) {

    case LANGUAGE_UPDATE_REQUEST:
      return { language: action.payload }
      
    default:
      return state
  }
}