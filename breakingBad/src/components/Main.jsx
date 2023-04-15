import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalContext";
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios";

const Main = () => {
  const { movieItems, setMovieItems } = useContext(GlobalContext);
  const { showItems, setShowItems } = useContext(GlobalContext);
  const {setCategory } = useContext(GlobalContext);
  const {setId} = useContext(GlobalContext)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async (url) => {
      const fetchItems2 = async (url) => {
        let res = await axios.get(
          url+
            import.meta.env.VITE_API_KEY
        );
        const data = res.data.results;
        return data;
      };
      setMovieItems(await fetchItems2('https://api.themoviedb.org/3/trending/movie/day?api_key='));
      setShowItems(await fetchItems2('https://api.themoviedb.org/3/trending/tv/day?api_key='));
    };
    fetchItems();
  }, []);

  const onClick = (id,cat)=>{
    setId(id);
    setCategory(cat)
    navigate('/player');
  }
  return (
    <div className="main">
      <div className="mini-main">
        <h1>Trending Movies</h1>
        <div className="item">
          {movieItems.map((item) => (
            <div className="card" key={item.id}>
              <img
                src={"https://image.tmdb.org/t/p/w500//" + item.poster_path}
                alt="img"
                height={"250px"}
                onClick={()=>onClick(item.id,"movie")}
              />
              <h4>{item.title}</h4>
              <p>
                {item.release_date.slice(0, 4)} IMDB:{item.vote_average}
              </p>
            </div>
          ))}
        </div>
        <h1>Trending Shows</h1>
        <div className="item">
          {showItems.map((item) => (
            <div className="card" key={item.id}>
              <img
                src={"https://image.tmdb.org/t/p/w500//" + item.poster_path}
                alt="img"
                height={"250px"}
                onClick={()=>onClick(item.id,"tv")}
              />
              <h4>{item.name}</h4>
              <p>
                {item.first_air_date.slice(0, 4)} IMDB:{item.vote_average}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
