import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import folderlogo from "../../assets/img/v6-icon (free).png"
import calendarlogo from "../../assets/img/calendar.png"
// import Comments from "./components/Comments";
import axiosInstance from "../../services/axios";

function ArticlePage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log(post);

  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`/news/${params.id}`);
        setPost(res.data);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [params.id]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="container">
      <div className="single">
        <div className="single__title">{post.title}</div>
        <div className="single__image">
          <img src={post.imageUrl} alt="news" />
        </div>
        <div className="single__info">
          <div className="single__date">
            <img src={calendarlogo} className="single__date-img" alt="calendar logo" />
            {formatDate(post.datePublished)}
            </div>
          <div className="single__hours">
            Время на прочтение: <p>{post.readTime} мин.</p>
          </div>
          <div className="single__categories">
            <img className="single__date-img" src={folderlogo} alt="" />
            Категории:
            {post.tags &&
              post.tags.map((item, index) => (
                <span key={index} className="single__categories-item">
                  {item + ", "}
                </span>
              ))}
          </div>
        </div>
        <div className="single__content">{post.content}</div>
      </div>
    </div>
  );
}

export default ArticlePage;
