import Pagination from 'react-bootstrap/Pagination';
import { useRouter } from 'next/router';

// Custom pagination component for the app
// Props - current page, pagination obj received from server
const Paginate = ({page, pagination}) => {

    const router = useRouter();

    if(!pagination){
        return <></>;
    }

    // Calculate total no of available pages
    const totalPages = pagination.total/pagination.limit;

    const pages = [];
    const min = Math.min(5, totalPages-page+1);
   
    // Create an array of max 5 items starting from the current page
    for(let i=0; i<min; i++){
        pages.push(page+i);
    }

    // Helper function to handle pagination routing
    const handleClick = (pg) => {
        let url = router.asPath;
        let arr = url.split("&");

        if(arr[arr.length-1].includes("page=")){
            arr = arr.slice(0,arr.length-1);
            url = arr.join("&")
        }
        if(url === "/news"){
            url = url + '?'
        }
        url = url + `&page=${pg}`;
        router.push(url);
    }

    return (
        <Pagination className="mt-5 paginate flex-row justify-content-center px-auto" size="lg">
            <Pagination.First disabled={page===1} onClick={() => handleClick(1)}/>
            <Pagination.Prev disabled={page===1} onClick={() => handleClick(page-1)}/>
            {
                pages.map(item => <Pagination.Item active={item===page} key={item} onClick={() => handleClick(item)}>{item}</Pagination.Item>)
            }
            <Pagination.Next disabled={page===totalPages} onClick={() => handleClick(page+1)}/>
            <Pagination.Last disabled={page===totalPages} onClick={() => handleClick(totalPages)}/>
        </Pagination>
    );
}

export default Paginate;