import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.scss";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        if (data?.results?.length) {
            const randomIndex = Math.floor(Math.random() * 20);
            const bg = url.backdrop + data.results[randomIndex].backdrop_path;
            setBackground(bg);
        }
    }, [data, url]);

    const handleSearch = useCallback(() => {
        if (query.length > 0) {
            navigate(`/search/${query}`);
        }
    }, [query, navigate]);

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">CinePrime</span>
                    <span className="subTitle">
                        Extensive selection of films, TV series, and visionary creators.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or TV show..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={handleKeyUp}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
