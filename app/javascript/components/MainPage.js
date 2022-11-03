import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDevelopers } from "./redux/developer.js";

function MainPage() {
  const [developerName, setDeveloperName] = useState("");
  const [developerEmail, setDeveloperEmail] = useState("");
  const [developerStack, setDeveloperStack] = useState("");
  const dispatch = useDispatch();
  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);
  const displayDevelopers = developers.map((developer) => (
    <div key={developer.id}>
      <p>{developer.name}</p>

      <Link to={`/developers/${developer.id}`}>Show</Link>
    </div>
  ));

  return (
    <div>
      Developers
      {displayDevelopers}
      <Link to="/bookings">My Booked Developers</Link>
      <input
        type="text"
        placeholder="name"
        value={developerName}
        onChange={(e) => {
          setDeveloperName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="email"
        value={developerEmail}
        onChange={(e) => {
          setDeveloperEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="stack"
        value={developerStack}
        onChange={(e) => {
          setDeveloperStack(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          fetch("/api/v1/developers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: developerName,
              email: developerEmail,
              stack: developerStack,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              dispatch(fetchDevelopers());
            });
        }}
      >
        Add Dev
      </button>
    </div>
  );
}

export default MainPage;
