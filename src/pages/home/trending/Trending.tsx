import  { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs"
import useFetch from "../../../hooks/useFetch"
import "./Trending.scss"
import Carousel from "../../../components/carousel/Carousel";
Carousel
useFetch
ContentWrapper
SwitchTabs
const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
    const onTabChange = (tab: string) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={undefined} title={undefined} />
    </div>
  )
}

export default Trending;
