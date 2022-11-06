import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
          <p>{developer.name}</p>
          <p>{developer.bio}</p>
          <Link to={`/developers/${developer.id}`}>Show</Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1 className="mainpage-heading">Developers</h1>
      <div className="display-dev">{displayDevelopers}</div>
      <Link to="/bookings">My Booked Developers</Link>
    </div>
  );
}

export default MainPage;
