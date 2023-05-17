import { Chip } from "@material-ui/core";
import axios from "axios"
import { useEffect } from "react";

const Genres = ({selectedGenres,setSelectedGenres,genres,setGenres,setPage,type}) => {
  const handleAdd=(genre)=>{
    setSelectedGenres([...selectedGenres,genre]);
    setGenres(genres.filter((g)=> g.id!==genre.id));
    setPage(1);
  }
  const handleRemove=(genre)=>{
    setSelectedGenres(selectedGenres.filter((selected)=> selected.id!==genre.id));
    setGenres([...genres,genre]);
    setPage(1);
  }
  const fetchGenres=async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    setGenres(data.genres);
  };
  useEffect(()=>{
    fetchGenres();
    // eslint-disable-next-line
  },[])
  return (
    <div style={{padding: "6px 0"}}>
        {selectedGenres && selectedGenres.map((i)=>(
            <Chip label={i.name} style={{margin:2}} size="small" key={i.id} clickable onDelete={()=>handleRemove(i)} color="primary"/>
        ))}
        {genres && genres.map((i)=>(
            <Chip label={i.name} style={{margin:2}} size="small" key={i.id} clickable onClick={()=>handleAdd(i)} />
        ))}
    </div>
  )
}

export default Genres
