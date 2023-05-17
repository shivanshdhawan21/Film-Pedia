import { useEffect, useState } from "react";
import axios from "axios"
import "./trending.scss"
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../Pagination/CustomPagination";
const apiKey=process.env.REACT_APP_API_KEY;
const Trending = () => {
  const [page,setPage]=useState(1);
  const [content, setContent] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`);
      setContent(data.results);
    }
    fetchTrending();
  }, [page]);
  return (
    <div>
      <span className="pageTitle">TRENDING</span>
      <div className="trending">
        {
          content && content.map((i) => (
            <SingleContent key={i.id} id={i.id} poster={i.poster_path} title={i.title || i.name} date={i.first_air_date || i.release_date} media_type={i.media_type} vote_average={i.vote_average} />
          ))
        }
      </div>
      <CustomPagination setPage={setPage} numberOfPages={10}/>
    </div>
  )
}

export default Trending
