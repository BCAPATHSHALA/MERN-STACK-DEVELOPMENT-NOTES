import React, { useEffect, useState, useRef } from "react";
import News from "./News";
import "./News.css";

function NewsApp() {
  const apiKey = "93a539e82a05401e9ba69e7a227d0abf";
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const queryInputRef = useRef(null);
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2022-11-10&sortBy=publishedAt&apiKey=${apiKey}`;

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonDta = await response.json();
      setNewsList(jsonDta.articles);
    } catch (error) {
      console.log(error, "Error");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  }

  return (
    <>
      <form>
        <input type="text" ref={queryInputRef} />
        <input type="submit" onClick={handleSubmit} />
      </form>
      {newsList.map((news) => {
        return (
          <>
            <News news={news} />
          </>
        );
      })}
    </>
  );
}

export default NewsApp;
