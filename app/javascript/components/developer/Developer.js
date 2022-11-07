import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevelopers } from "../redux/developer";
import { useParams, Link } from "react-router-dom";

const Developer = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);

  const foundDeveloper = developers.find(
    (developer) => developer.id === parseInt(params.id)
  );

  const displayDeveloper = foundDeveloper ? (
    <div className="d-flex justify-content-evenly ">
      <div className="image-dev">
        <img src={foundDeveloper.photo} alt="new" className="dev-image" />
      </div>
      <div>
        <h2>{foundDeveloper.name}</h2>
        <p className="bg-secondary text-white p-2">
          Bio : {foundDeveloper.bio}
        </p>
        <p>Email : {foundDeveloper.email}</p>
        <p className="bg-secondary text-white  p-2">
          City : {foundDeveloper.city}
        </p>
        <p>Phone : {foundDeveloper.phone}</p>
        <p className="bg-secondary text-white  p-2">
          Github : {foundDeveloper.github}
        </p>
        <div>
          <button className=" btn btn-success p-3 my-5 rounded-pill">
            Book Developer
          </button>
        </div>

        <Link to={`/add-booking/${foundDeveloper.id}`}>
          <button className=" btn btn-success p-3 rounded-pill">
            Edit Developer
          </button>
        </Link>
      </div>
    </div>
  ) : null;

  return <div>{displayDeveloper}</div>;
};

export default Developer;
