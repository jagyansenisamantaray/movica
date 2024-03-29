import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration,getGenres } from "./store/homeSlice";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import About from "./pages/about/About";


function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home )
  console.log(url);
  useEffect(()=>{
    fetchApiConfig();
    genresCall();
  }, []) ;
  const fetchApiConfig = ()=>{
    fetchDataFromApi('/configuration')
        .then((res)=>{
          console.log(res);

          const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
          }
          dispatch(getApiConfiguration(url));
        });
  };

  const genresCall = async () => {
    const promises: unknown[] = [];
    const endPoints = ["tv", "movie", "about"];
    const allGenres: { [key: string]: string } = {};
    
    endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    
    
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.map(({ genres }:any) => {
        
        return genres.map((item: { id?: string | number ; }) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
};
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
