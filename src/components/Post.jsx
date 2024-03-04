import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ARTICLE_PAGE_ROUTE } from "../utils/consts";
import { formatDate } from "../utils/utils";

function Post({ post }) {
  const content = post.content.substring(0, 50) + "...";

  return (
    <div className="post">
      <div className="post__image">
        <img src={post.imageUrl} alt="News" />
      </div>
      <div className="post__info">
        <Link
          to={
            ARTICLE_PAGE_ROUTE.substring(0, ARTICLE_PAGE_ROUTE.length - 3) +
            post._id
          }
          className="post-item post-link"
        >
          <div className="post__title">{post.title}</div>
        </Link>
        <div className="post__content">{content}</div>
        <div className="post__author">
          <div className="post__author-img">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="post__author-right">
            <div className="post__author-name">{post.author}</div>
            <div className="post__author-date">
              {formatDate(post.datePublished)}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="post-img">
        <img src={post.imageUrl} alt="Новость" />
      </div>
      <div className="post-info">
        <p className="post-date">{formatDate(post.datePublished)}</p>
        <h2 className="post-title">{post.title}</h2>
        <div className="post-bottom">
          <div className="post-item">
            <FontAwesomeIcon icon={faUser} />
            <p className="post-item-name">{post.author}</p>
          </div>
          <Link
            to={
              ARTICLE_PAGE_ROUTE.substring(0, ARTICLE_PAGE_ROUTE.length - 3) +
              post._id
            }
            className="post-item post-link"
          >
            <p className="post-item-name">Подробнее</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Post;
