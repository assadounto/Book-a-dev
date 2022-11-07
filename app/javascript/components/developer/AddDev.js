import React, { useState } from "react";
function AddDev() {
  const [developerName, setDeveloperName] = useState("");
  const [developerEmail, setDeveloperEmail] = useState("");
  const [developerStack, setDeveloperStack] = useState("");
  const [developerBio, setDeveloperBio] = useState("");
  const [developerPhoto, setDeveloperPhoto] = useState("");
  return (
    <div>
      <form>
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
        <input
          type="text"
          placeholder="bio"
          value={developerBio}
          onChange={(e) => {
            setDeveloperBio(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="photo"
          value={developerPhoto}
          onChange={(e) => {
            setDeveloperPhoto(e.target.value);
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
          Add Developer
        </button>
      </form>
    </div>
  );
}

export default AddDev;
