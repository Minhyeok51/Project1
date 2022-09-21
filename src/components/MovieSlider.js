import React, { Component } from "react";
import Slider from "react-slick";
import {useState,useEffect} from 'react'
import axios from "axios";

// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

function MovieSlider() {
    let [movies,setMovies] = useState([{}
        // {id: "001",urlPath: "img/movie_image1.jpg"},
        // {id: "002",urlPath: "img/movie_image2.jpg"},
        // {id: "003",urlPath: "img/movie_image3.jpg"},
        // {id: "004",urlPath: "img/movie_image4.jpg"},
        // {id: "005",urlPath: "img/movie_image5.jpg"},
        // {id: "006",urlPath: "img/movie_image6.jpg"},
        // {id: "007",urlPath: "img/movie_image7.jpg"},
        // {id: "008",urlPath: "img/movie_image8.jpg"},
        // {id: "009",urlPath: "img/movie_image9.jpg"},
        // {id: "010",urlPath: "img/movie_image10.jpg"},
        // {id: "011",urlPath: "img/movie_image11.jpg"},
        // {id: "012",urlPath: "img/movie_image12.jpg"},
      ]);

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
    focusOnSelect:true
  };

  
  useEffect(()=>{
    (async ()=>{
      const movies = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=522104ab0e22f171a7b47fa13597f9fc&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&with_watch_monetization_types=flatrate")
    
    setMovies(movies.data.results)
    // console.log(movies.data.results)
    })();
  },[])
  
  return (
    <div>
      <Slider {...settings}>
        {movies.map((data, i) => {
          return (
            <div>
              {console.log(movies)}
               
              <img src={movies[i].poster_path} width={200} height={200}/>
            </div>
          );
        })}
        
      </Slider>
    </div>
  );
}

export default MovieSlider;
