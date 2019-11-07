import React, { useState, useEffect } from 'react';
import { UserConsumer } from '../../App';

const News = ({ myNews }) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [info, setInfo] = useState(0);

  useEffect(() => {
    const url = `https://newsapi.org/v2/${myNews.type}?${myNews.query}&apiKey=ef895e4833db45119946a71b8c4530ba`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.articles)
      })
      .catch(error => {
        setError(true)
      })
  }, [myNews])

  useEffect(() => {
    setInfo(data)
  }, [data])

  const renderItems = news => {
    if(news.length > 0) {
      news.map(item => {
        return item
      })
    }
  }

  return (
    <UserConsumer>
      {({ firstName, lastName, data }) => (
      <div>
        <p>{firstName} {lastName}</p>
        <p>{data}</p>
        <hr />
        <p>{info.length > 0 ? info.map(item => ( <p>{item.author}</p> )) : ''}</p>
      </div>
      )}
    </UserConsumer>    
  )
}

export default News;