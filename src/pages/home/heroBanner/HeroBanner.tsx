// import React from 'react'
import { useState, useEffect } from "react";
import "./HeroBanner.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data, url.backdrop]);
  const searchQueryHandler = (e: { key: string; }) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <>
      <div className="heroBanner">
        {!loading && 
          <div className="backdrop-img">
            <Img src={background} className={undefined} />
          </div>
        }
        <div className="opacity-layer">
          
        </div>
        <ContentWrapper>
            <div className="heroBannerContent">
              <span className="title">Welcome.</span>
              <span className="subTitle">
                million of movies, TV shows and people to discover nd Explore
                Now.
              </span>
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search for a movie or TV shows..."
                  // eslint-disable-next-line no-undef
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
                />
                <button>Search</button>
              </div>
            </div>
          
        </ContentWrapper>
      </div>
    </>
  );
};

export default HeroBanner;
