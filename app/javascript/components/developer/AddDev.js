import React, { useState } from "react";
function AddDev() {
  const [developerName, setDeveloperName] = useState("");
  const [developerEmail, setDeveloperEmail] = useState("");
  const [developerStack, setDeveloperStack] = useState("");
  const [developerBio, setDeveloperBio] = useState("");
  const [developerPhoto, setDeveloperPhoto] = useState("");
  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setDeveloperPhoto(data.secure_url);
      });
  };
  return (
    <div className="d-flex justify-content-center mx-5">
      <form className="d-flex flex-column">
        <input
          type="file"
          id="file-selector"
          onChange={(e) => {
            uploadImage(e.target.files);
          }}
        />
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
                photo: developerPhoto,
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
