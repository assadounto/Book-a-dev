import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevelopers } from "../redux/developer";

function DeleteDevelopers() {
  const dispatch = useDispatch();
  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);
  console.log(developers);
  const displayDevelopers = developers.map((developer) => (
    <div key={developer.id}>
      <p>{developer.name}</p>
    </div>
  ));

  return <div>{displayDevelopers}</div>;
}

export default DeleteDevelopers;
