import "./singleContent.scss"
import {img_300, unavailable} from "../Pages/config"
import { Badge } from "@material-ui/core"
import ContentModal from "../ContentModal/ContentModal"
const SingleContent = ({id,poster,title,date,media_type,vote_average}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <div className="media">
        <Badge overlap="rectangular" badgeContent={Math.round(vote_average*10)/10} color={vote_average>6?"primary":"secondary"} />
        <img className="poster" src={poster?`${img_300}/${poster}`:unavailable} alt={title}/>
        <b className="title">{title}</b>
        <span className="subTitle">
          {
            media_type=== "tv"?"TV Series":"Movie"
          }
          <span className="subTitle">{date}</span>
        </span>
      </div>
    </ContentModal>
  )
}

export default SingleContent
