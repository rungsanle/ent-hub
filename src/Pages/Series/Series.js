import { useEffect, useState } from "react";
import axios from "axios"
import Genres  from "../../components/Genres/Genres";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";
import "./Series.css";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Series = () => {

    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const genreforURL = useGenre(selectedGenres);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );

        // console.log(data.results);
        setContent(data.results);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchTrending();
    }, [page]);

    return (
        <div>
            <span className="pageTitle">TV Series</span>
            <Genres 
                type="tv" 
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres} 
                setGenres={setGenres} 
                setPage={setPage} 
            />
            <div className="series">
                {
                    content && content.map(c => (
                        <SingleContent key={c.id} media_type="tv" {...c} />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Series
