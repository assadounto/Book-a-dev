import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevelopers } from "../redux/developer";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

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
    <div className="dev-details">
      <div className="image-dev">
        <img src={foundDeveloper.photo} alt="new" className="dev-image" />
      </div>
      <Button variant="success d-flex justify-content-end w-10">Reserve</Button>
    </div>
  ) : null;

  return <div>{displayDeveloper}</div>;
};

export default Developer;
