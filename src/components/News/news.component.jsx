import React, { useState, useEffect } from 'react';
import { UserConsumer } from '../../App';

const News = ({ myNews }) => {
  const [error, setError] = useState(false);
  const [news, setNews] = useState({
    news: []
  });

  useEffect(() => {
    const url = `https://newsapi.org/v2/${myNews.type}?${myNews.query}&apiKey=ef895e4833db45119946a71b8c4530ba`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews({
          news: data.articles
        })
      })
      .catch(error => {
        setError(true)
      })
  }, [myNews])

  return (
    <UserConsumer>
      {({ firstName, lastName, data }) => (
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{data}</p>
      </div>
      )}
    </UserConsumer>    
  )
}

export default News;