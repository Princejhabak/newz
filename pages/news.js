import React from "react";
import { useEffect } from "react";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head'
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import { listArticles } from "../actions/articleActions";
import Paginate from "../components/Paginate";
import NoData from "../components/NoData";

// Page to show live news based on filters, language & search query
const News = () => {

    // console.log(moment().utcOffset("+00:00").format('MMMM Do, YYYY HH:mm'));

    const router = useRouter();console.log(router);
    const { search, categories, countries, sortBy, fromDate, toDate, page } = router.query;

    const dispatch = useDispatch();

    const _state = useSelector((state => state));console.log('----', _state)
    const {language} = useSelector((state) => state.language);
    const {articles, loading , error} = useSelector((state) => state.articleList);

    // Get articles based on params
    useEffect(() => {
        dispatch(listArticles(search, categories, countries, sortBy, fromDate, toDate, page));
    },[dispatch, language, search, categories, countries, sortBy, fromDate, toDate, page]);

    // If loading state return loader
    if(loading){
        return <Loader />
    }

    // If error state return error message component
    if(error?.status){
        return(
            <Message variant='danger'>
                <p>Error {error.status} - {error.statusText}</p>
                <p>{error.message}</p>
            </Message>
        );
    }

    // If empty data state return no data component
    if(!articles?.data?.length){
        return(<NoData />)
    }

    return(
        <>
            <Head>
                <title>Newz</title>
                <meta name="News App" content="Live news from various categories" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <h1 className="ml-4" data-testid="news-top-heading">Top Results {search ? `: ${search}` : ''}</h1>
            {articles?.data?.map((article, idx) => <ArticleCard key={`${idx}_${article.published_at}`} article={article}/>)}
            <Paginate page={page ? parseInt(page) : 1} pagination={articles.pagination}/>
        </>
    );
}

export default News;
