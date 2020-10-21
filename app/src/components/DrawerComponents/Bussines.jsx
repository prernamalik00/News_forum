import React, { useEffect, useState } from 'react';
import SqrCards from './SqrCards';
import InterestSection from "../InterestSection";

function Bussiness() {
  
    var url1 =
    'http://newsapi.org/v2/top-headlines?country=in&apiKey=5ba33b83af9d4febab7e05a05f983793';
    var req = new Request(url1 );
    const [item, setItem] = useState({});
    useEffect(() => {
      fetch(req)
        .then((res) => res.json())
        .then((data) => setItem(data))
        .catch((error) => console.log(error));
    }, []);
    var news = item.articles;
    console.log(news);
    return (
   
    <div className="container-fluid">
    <div className="page">
 
      <div className="row row-cols-md-4 ">

      {news
     ? news.map((news) => < SqrCards data={news} key={news.url} />)
       : 'loading'}
          
       
      </div>
      </div>
    </div>
  
    );
  }
  
  export default Bussiness;