import React, { Component } from "react";
import Slider from "react-slick";
import {useState,useEffect} from 'react'
import axios from "axios";

function MovieSlider() {
    let [movies,setMovies] = useState([]);

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode : true,
    centerPadding :'100px',
    // focusOnSelect:true
  };

  
  useEffect(()=>{
    (async ()=>{
      const movies = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=522104ab0e22f171a7b47fa13597f9fc&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=8&with_watch_monetization_types=flatrate")
      
    setMovies(movies.data.results)
    console.log(movies.data)
    })();
  },[])
  // API_KEY =522104ab0e22f171a7b47fa13597f9fc;
  return (
    <div>
      <Slider {...settings}>
        {movies.map((data, i) => {
          return (
            <div>
              {/* {console.log(movies)} */}
              <img key={movies[i].id} src={'https://image.tmdb.org/t/p/original' + movies[i].poster_path} width={200} height={200} title={movies[i].title}/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default MovieSlider;
