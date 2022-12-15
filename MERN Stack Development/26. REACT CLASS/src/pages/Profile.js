import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const parameters = useParams();
  return (
    <div>
      <h1>Profile of {parameters.userId}</h1>
    </div>
  );
}

export default Profile;
