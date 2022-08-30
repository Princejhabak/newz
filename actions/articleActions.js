import axios from 'axios';
import {
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAIL,
    LANGUAGE_UPDATE_REQUEST
} from '../constants/articleConstants';

// Access env variables stored in .env file 
const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL;
const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;

// Action creator to list articles based on the provided params
export const listArticles = (search, categories, countries, sortBy, fromDate, toDate, page) => async (dispatch, getState) => {

    dispatch({ type: ARTICLE_LIST_REQUEST });

    // Access redux state to get user selected language
    const {language} = getState();

    let fetchURL = `${ROOT_URL}/news?access_key=${ACCESS_KEY}&languages=${language.language}`;

    // Modify the url based on input params
    if(search){
        fetchURL = fetchURL + `&sort=published_desc&keywords=${search}`;
    }
    else{
        if(categories){
            fetchURL = fetchURL + `&categories=${categories}`;
        }
        if(countries){
            fetchURL = fetchURL + `&countries=${countries}`;
        }
        if(sortBy){
            fetchURL = fetchURL + `&sort=${sortBy}`;
        }
        else{
            fetchURL = fetchURL + `&sort=published_desc`;
        }
        if(fromDate){
            fetchURL = fetchURL + `&date=${fromDate}`;
            if(toDate){
                fetchURL = fetchURL + `,${toDate}`;
            }
        }
    }

    if(page){
        const _page = parseInt(page);
        const offset = (_page-1)*25;
        fetchURL = fetchURL + `&offset=${offset}`;
    }
    
    // const res = await fetch(fetchURL);
    // const data = await res.json();
    
    try{
        const res = await axios.get(fetchURL);
        const data = res.data;
        dispatch({
            type: ARTICLE_LIST_SUCCESS,
            payload: data,
        });
    }
    catch(err){
        const error = {
            status: err.response?.status,
            statusText: err.response?.statusText,
            message: err.response?.data?.error?.message
        }
        console.log(error);

        dispatch({
            type: ARTICLE_LIST_FAIL,
            payload: error
        });
    }
    // // If error
    // if(!res.statusText==='OK'){
    //     const error = {
    //         status: res.status,
    //         statusText: res.statusText,
    //         message: data.error.message
    //     }
    //     console.log(error);

    //     dispatch({
    //         type: ARTICLE_LIST_FAIL,
    //         payload: error
    //     });
    // }
    // else{
    //     dispatch({
    //         type: ARTICLE_LIST_SUCCESS,
    //         payload: data,
    //     });
    // } 

}

// Action creator to change the language based on the provided params
export const changeLanguage = (language) => async (dispatch) => {
  dispatch({
    type: LANGUAGE_UPDATE_REQUEST,
    payload: language,
  });
}