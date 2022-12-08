import React from "react";

function LogicalAndOperator() {
  const showPrivateData = true;
  return (
    <div>
      <div>
        {showPrivateData ? <p>This is private data: 89739gft2920mm</p> : <></>}
        {showPrivateData && <p>This is private data: 89739gft2920mm</p>}
      </div>
    </div>
  );
}

export default LogicalAndOperator;
