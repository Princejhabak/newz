import moment from "moment";
import Link from 'next/link'

// Component to show a single news article with the below details
const ArticleCard = ({article}) => {

    const {source, published_at, title, description, author, category, image, url} = article;

    return(
        <div className="row m-4 article-card">
            {
                image ?
                <>
                    <div className="col-9 py-2 article-card-left">
                        <div className="article-card-header">
                            <h5 className="article-card-header-source">{source}</h5>
                            {/* <h6 className="text-warning">{moment(published_at).utcOffset("+00:00").format('MMMM Do, YYYY')}</h6> */}
                            <h6 className="text-warning">{moment(published_at).utcOffset("+00:00").format('MMMM Do, YYYY HH:mm')}</h6>
                            {/* <h6 className="text-warning">{published_at}</h6> */}
                        </div>
                        <h5 className="article-card-heading text-dark">
                            <a href={url} target="blank">
                                {title}
                            </a>
                        </h5>
                        <small className="article-card-body">{description}</small>
                        <div className="article-card-footer">
                            <small className="text-warning"><b>Author: {author ? author : 'N/A'}</b></small>
                            <small className=""><b>Category: {category}</b></small>
                        </div>
                    </div>
                    <div className="col-3 article-card-right">
                            <img src={image} className="img-fluid rounded-start article-card-img" alt="image" /> 
                    </div>
                </>
                :
                <>
                    <div className="col-12 py-2 article-card-left">
                        <div className="article-card-header">
                            <h5 className="article-card-header-source">{source}</h5>
                            <h6 className="text-warning">{moment(published_at).utcOffset("+00:00").format('MMMM Do, YYYY HH:mm')}</h6>
                        </div>
                        <h5 className="article-card-heading text-dark">
                            <a href={url} target="blank">
                                {title}
                            </a>
                        </h5>
                        <small className="article-card-body">{description}</small>
                        <div className="article-card-footer">
                            <small className="text-warning"><b>Author: {author ? author : 'N/A'}</b></small>
                            <small className=""><b>Category: {category}</b></small>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default ArticleCard;
