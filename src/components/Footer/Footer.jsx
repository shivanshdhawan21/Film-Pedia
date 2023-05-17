import { Movie, Search, Tv, Whatshot } from "@material-ui/icons"
import "./footer.scss"
import { useNavigate } from "react-router-dom"
const Footer = () => {
  const navigate=useNavigate();
  return (
    <div className="footer">
      <button onClick={()=>navigate("/")}><Whatshot />Trending</button>
      <button onClick={()=>navigate("/movies")}><Movie />Movies</button>
      <button onClick={()=>navigate("/series")}><Tv />Series</button>
      <button onClick={()=>navigate("/search")}><Search />Search</button>
    </div>
  )
}

export default Footer
