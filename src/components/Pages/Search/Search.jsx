import { useEffect, useState } from "react"
import axios from "axios"
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../Pagination/CustomPagination";
import { Button, Tab, Tabs, TextField, ThemeProvider } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { createTheme } from '@mui/material/styles'
const darkTheme=createTheme({
  palette:{
    mode:"dark",
    primary:{
      main:"#fff",
    },
  },
});
const Search = () => {
  const [type,setType]=useState(0);
  const [page,setPage]=useState(1);
  const [searchText,setSearchText]=useState("");
  const [content,setContent]=useState();
  const [numberOfPages,setNumberOfPages]=useState();
  const fetchSearch=async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY }&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
    setContent(data.results);
    setNumberOfPages(data.total_pages);
  }
  useEffect(()=>{
    window.scroll(0,0);
    fetchSearch();
    // eslint-disable-next-line
  },[type,page]);
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{display:"flex",margin:"15px 0"}}>
          <TextField
            style={{ flex:1, paddingRight:"5px" }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(i)=>setSearchText(i.target.value)}
          />
          <Button variant="contained" style={{marginLeft:10}} onClick={fetchSearch}>
            <SearchOutlined />
          </Button>
        </div>
        <Tabs value={type} 
        indicatorColor="primary" 
        textColor="primary"
        onChange={(event,newValue)=>{
          setType(newValue);
          setPage(1);
        }}
        style={{paddingBottom:5}}
        >
          <Tab style={{width:"50%"}} label="Search Movies" />
          <Tab style={{width:"50%"}} label="Search TV Series" />
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {searchText&& !content && (type?<h2>No Series found</h2>:<h2>No Movies found</h2>)}
        {
          content && content.map((i) => (
            <SingleContent key={i.id} id={i.id} poster={i.poster_path} title={i.title || i.name} date={i.first_air_date || i.release_date} media_type={i.first_air_date?"tv":"movie"} vote_average={i.vote_average} />
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

export default Search
