import React, { useEffect } from "react";
import { axiosClient } from "../../utils/axiosClient";

function Home() {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axiosClient.get("/posts/all");
    console.log("got the response: ", response);
  }

  return <div>Home</div>;
}

export default Home;
