import { useEffect, useState } from "react";
import axios from "axios"
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
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
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {
                    content && content.map(c => (
                        <SingleContent key={c.id} {...c} />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Trending
