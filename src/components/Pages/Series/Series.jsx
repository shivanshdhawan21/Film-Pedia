import { useEffect, useState } from "react";
import axios from "axios"
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../Pagination/CustomPagination";
import useGenres from "../../Hooks/useGenres";
import Genres from "../../Genres";
const Series = () => {
  const [page,setPage]=useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages,setNumberOfPages]=useState();
  const [selectedGenres,setSelectedGenres]=useState([]);
  const [genres,setGenres]=useState([]);
  const genreforURL=useGenres(selectedGenres);
  useEffect(() => {
    const fetchSeries = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
      setContent(data.results);
      setNumberOfPages(data.total_pages);
    }
    fetchSeries();
  }, [page,genreforURL]);
  return (
    <div>
      <span className="pageTitle">SERIES</span>
      <Genres type="movie" setSelectedGenres={setSelectedGenres} setGenres={setGenres} genres={genres} selectedGenres={selectedGenres} setPage={setPage}/>
      <div className="trending">
        {
          content && content.map((i) => (
            <SingleContent key={i.id} id={i.id} poster={i.poster_path} title={i.title || i.name} date={i.first_air_date || i.release_date} media_type="tv" vote_average={i.vote_average} />
          ))
        }
      </div>
      {
        numberOfPages>0 &&
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      }
    </div>
  )
}

export default Series
