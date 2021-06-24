import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/Config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({id, poster_path, title, name, first_air_date, release_date, media_type, vote_average}) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={ vote_average > 6 ? "primary" : "secondary" } />
            <img className="poster" src={ poster_path ? `${img_300}/${poster_path}` : unavailable } alt={title} />
            <b className="title">{title || name}</b>
            <span className="subTitle">{media_type === "tv" ? "TV Series" : "Movie"}
                <span className="subTitle">{first_air_date || release_date}</span>
            </span>
            
        </ContentModal>
    )
}

export default SingleContent
