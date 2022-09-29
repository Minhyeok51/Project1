import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal, { ModalChild } from "./Modal";
import "../App.css";
function MovieSlider({ genre_id }) {
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState([]);
  const [show, setShow] = useState(false);
  const onOk = () => setShow(false);
  
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "100px",
    // focusOnSelect:true
  };
  const KEY = "522104ab0e22f171a7b47fa13597f9fc";
  const getMovies = async () => {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=ko-kR&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&with_genres=${genre_id}&with_watch_providers=8&with_watch_monetization_types=flatrate`
    );
    setMovies(movies.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <div id="modal"></div>
      <Slider {...settings} style={{ margin: "30px"}}>
        {movies.map((data, i) => {
          return (
            <>
              <div className="movies">
                {/* {console.log(movies)} */}
                <img
                  key={movies[i].id}
                  src={
                    "https://image.tmdb.org/t/p/original" +
                    movies[i].poster_path
                  }
                  width={190}
                  height={300}
                  title={movies[i].title}
                  style={{ cursor: "pointer", borderRadius: "10px" }}
                  onClick={() => {
                    if (data.id === movies[i].id) {
                      console.log(movies[i]);
                      setShow(true);
                      setMovieInfo(movies[i]);
                    }
                  }}
                />
              </div>

              {show && (
                <Modal>
                  <ModalChild
                    imgPath={movieInfo.poster_path}
                    title={movieInfo.title}
                    overview={movieInfo.overview}
                    date={movieInfo.release_date}
                    onOk={onOk}
                    i={i}
                  />
                </Modal>
              )}
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default MovieSlider;
