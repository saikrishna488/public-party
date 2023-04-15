import React,{ useContext, useEffect }  from 'react'
import { GlobalContext } from "../context/globalContext";

const Player = () => {
    const {id} = useContext(GlobalContext);
    const { category} = useContext(GlobalContext);
  return (
    <div className='player'>
        <iframe id="iframe" src={category === 'tv' ? `https://www.2embed.to/embed/tmdb/${category}?id=${id}&s=1&e=1`: `https://www.2embed.to/embed/tmdb/${category}?id=${id}`} className='media' frameborder="0"></iframe>
    </div>
  )
}

export default Player
