import React from 'react'

function News({news}) {
  return (
    <div>
        <img src={news.urlToImage} alt={news.title} />
        <h2>{news.title}</h2>
        <p>{news.description}</p>
    </div>
  )
}

export default News