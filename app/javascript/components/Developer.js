import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevelopers } from "./redux/developer.js";
import { useParams } from "react-router-dom";

function EachDeveloper() {
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
    <div>
      <p>{foundDeveloper.name}</p>
    </div>
  ) : null;

  return <div>{displayDeveloper}</div>;
}

export default EachDeveloper;
