import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Mousewheel,
  Pagination,
  Keyboard,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./MovieList.css";
import MovieRating from "./Rating";
// import infinityWarImage from "./infinitywar.jpeg";

const roundToHalf = (num) => {
  return Math.round(num * 2) / 2;
};

const MoviesList = ({ movies, setMovies }) => {
  const handleRatingChange = (id, newRating) => {
    // Logic for updating the rating and count
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) return;

    const newRatingCount = movie.rating_count + 1;
    const newAvgRating =
      (movie.avg_rating * movie.rating_count + newRating) / newRatingCount;

    // Update the state
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id !== id) return movie;

        return {
          ...movie,
          rating_count: newRatingCount,
          avg_rating: newAvgRating,
        };
      });
    });
  };

  return (
    <>
      {" "}
      <h1 className="card-title-popular">Most Popular Movies</h1>
      <div>
        <Swiper
          effect={"coverflow"}
          lazy={"true"}
          direction="horizontal"
          slidesPerView={"auto"}
          spaceBetween={25}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 30,
            depth: 75,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          loop={true}
          keyboard={true}
          mousewheel={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[
            Mousewheel,
            Pagination,
            Keyboard,
            Navigation,
            EffectCoverflow,
          ]}
        >
          {" "}
          {movies.map((movie, index) => (
            <SwiperSlide key={movie.id} className={"swiper-slide"}>
              <div className="image-wrapper">
                <img
                  src={movie.backdrop ? movie.backdrop : "placeholder.jpeg"}
                  loading="lazy"
                  alt={movie.title}
                />
                <div className="movie-content">
                  <h3>{movie.title}</h3>
                  <p>{`Average Rating: ${roundToHalf(movie.avg_rating)}`}</p>
                  <p>{`Total Votes: ${movie.rating_count}`}</p>
                  <p>
                    <MovieRating
                      value={movie.avg_rating}
                      onChange={(newRating) =>
                        handleRatingChange(movie.id, newRating)
                      }
                    />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </>
  );
};

export default MoviesList;
