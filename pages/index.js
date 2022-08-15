import Head from 'next/head'
import SideNav from '../components/SideNav';
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import NoData from "../components/NoData";

// Home page of the app 
// Show the trending articles in various categories
const Home = ({articlesUc, error}) => {

    const articles = {
        business: [],
        health: [], 
        science: [],
        sports: [],
        general: []
    }

    if(articlesUc?.data){
        articlesUc?.data?.forEach(element => {
            switch(element.category){
                case "business":
                    articles.business.push(element);
                    break;
                case "health":
                    articles.health.push(element);
                    break;
                case "science":
                    articles.science.push(element);
                    break;
                case "sports":
                    articles.sports.push(element);
                    break;
                default:
                    articles.general.push(element);
                    break;      
            }
        });

        for (const category in articles) {
            articles[category] = articles[category].slice(0, 3)
        }
    }

    // If error returned from API return message component
    if(error?.status){
        return(
            <Message variant='danger'>
                <p>{error.status} - {error.statusText}</p>
                <p>{error.message}</p>
            </Message>
        );
    }

    // If empty list returned from API return no data component
    if(!articlesUc?.data?.length){
        return(<NoData />)
    }

    return (
        <>
            <Head>
                <title>Newz</title>
                <meta name="News App" content="Stay upto date with live articles across the globe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="ml-4 mb-4">Trending</h1>
            {
                articles.business.length && 
                <>
                    <h3 className="ml-4 text-warning">Business</h3>
                    {articles.business.map((article, idx) => <ArticleCard key={`${idx}_${article.published_at}`} article={article}/>)}
                </>
            }
            {
                articles.health.length && 
                <>
                    <h3 className="ml-4 text-warning">Health</h3>
                    {articles.health.map((article, idx) => <ArticleCard key={`${idx}_${article.published_at}`} article={article}/>)}
                </>
            }
            {
                articles.science.length && 
                <>
                    <h3 className="ml-4 text-warning">Science</h3>
                    {articles.science.map((article, idx) => <ArticleCard key={`${idx}_${article.published_at}`} article={article}/>)}
                </>
            }
            {
                articles.sports.length && 
                <>
                    <h3 className="ml-4 text-warning">Sports</h3>
                    {articles.sports.map((article, idx) => <ArticleCard key={`${idx}_${article.published_at}`} article={article}/>)}
                </>
            }
        </>
    )
}

export default Home;

// Function to invoke server side rendering
export async function getServerSideProps(context) {

    // Access env variables
    const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL;
    const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;

    let error = {};

    const fetchURL = `${ROOT_URL}/news?access_key=${ACCESS_KEY}&languages=en&sort=popularity&categories=business,health,science,sports`

    const response = await fetch(fetchURL);
    const data = await response.json();
    
    // If error
    if(!response.ok){
        error = {
            status: response.status,
            statusText: response.statusText,
            message: data.error.message
        }
        console.log(error);

        return { props: {
            articlesUc: {},
            error: JSON.parse(JSON.stringify(error))
        }}
    }
   
    return { props: {
        articlesUc: data,
        error
    }}
};
