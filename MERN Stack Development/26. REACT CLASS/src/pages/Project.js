import React from "react";
import { useParams } from "react-router-dom";

function Project() {
  const parameters = useParams();
  return (
    <div>
      <h1>
        Project of {parameters.userId} and {parameters.projectId}
      </h1>
    </div>
  );
}

export default Project;
