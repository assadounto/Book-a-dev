import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { fetchDevelopers } from "../redux/developer";
function MainPage() {
  const dispatch = useDispatch();
  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);

  const displayDevelopers = developers.map((developer) => (
    <SplideSlide key={developer.id}>
      <div className="mainpage">
        <div key={developer.id}>
          <div className="image-div">
            <img src={developer.photo} alt="new" className="image" />
          </div>
          <div className="dev-info">
            <Link to={`/developers/${developer.id}`}>
              <h2>{developer.name}</h2>
            </Link>
            <p>{developer.bio}</p>
            <div className="icons">
              <Link className="icon-items">
                <BsFacebook />
              </Link>
              <Link className="icon-items">
                <BsTwitter />
              </Link>
              <Link className="icon-items">
                <BsInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SplideSlide>
  ));

  return (
    <div className="mainpage-items">
      <div className="mainpage-heading">
        <h1>Developers</h1>
        <p className="main-para">Please select a developer of your choice.</p>
      </div>
      <Splide
        options={{
          perPage: 2,
          arrows: false,
          pauseOnHover: true,
          pauseOnFocus: true,
          pagination: false,
          autoplay: true,
          speed: 4000,
          type: "loop",
          interval: 4000,
          rewindByDrag: true,
          drag: "free",
          gap: "2rem",
        }}
      >
        {displayDevelopers}
      </Splide>
      <Link to="/bookings">My Booked Developers</Link>
    </div>
  );
}

export default MainPage;
