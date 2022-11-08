import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import ImageSlider from "./ImageSlider";
import { BsInstagram } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { fetchDevelopers } from "../redux/developer";

function MainPage() {
  const dispatch = useDispatch();
  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);

  const slides = [
    { url: "https://localhost:3001/images/1.jpg", title: "First slide" },
    { url: "https://localhost:3001/images/1.jpg", title: "Second slide" },
    { url: "https://localhost:3001/images/1.jpg", title: "Third slide" },
    { url: "https://localhost:3001/images/1.jpg", title: "Fourth slide" },
    { url: "https://localhost:3001/images/1.jpg", title: "Fifth slide" },
  ];
  const displayDevelopers = developers.map((developer) => (
    <div className="mainpage">
      <div key={developer.id}>
        <div className="image-div">
          <ImageSlider slides={slides}/>
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
  ));

  return (
    <div>
      <div className="mainpage-heading">
        <h1>Developers</h1>
        <p className="main-para">Please select a developer of your choice.</p>
      </div>
      <div className="display-dev">{displayDevelopers}</div>
      <Link to="/bookings">My Booked Developers</Link>
    </div>
  );
}

export default MainPage;
