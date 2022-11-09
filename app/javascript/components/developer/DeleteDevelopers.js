import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevelopers } from "../redux/developer";

function DeleteDevelopers() {
  const dispatch = useDispatch();
  const [fetchedDevelopers, setFetchedDevelopers] = useState([]);
  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchDevelopers());
    setFetchedDevelopers(developers);
  }, []);
  console.log(developers);
  const displayDevelopers = fetchedDevelopers.map((developer) => (
    <div key={developer.id}>
      <p>{developer.name}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          fetch(`/api/v1/developers/${developer.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setFetchedDevelopers(data);
            });
        }}
      >
        Delete
      </button>
    </div>
  ));

  return <div>{displayDevelopers}</div>;
}

export default DeleteDevelopers;
