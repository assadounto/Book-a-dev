import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
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
    <div className="mainpage">
      <div key={developer.id}>
        <div className="image-div">
          <img src={developer.photo} alt="new" className="image" />
        </div>
        <div className="dev-info">
          <h2>{developer.name}</h2>
          <p>{developer.bio}</p>
          <div className="icons">
            <Link>
              <BsFacebook className="icon-items" />
            </Link>
            <Link>
              <BsTwitter className="icon-items" />
            </Link>
            <Link>
              <BsInstagram className="icon-items" />
            </Link>
          </div>
          <Link to={`/developers/${developer.id}`}>Show</Link>
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
