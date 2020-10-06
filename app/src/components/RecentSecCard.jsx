import React from 'react';

function Card({ data }) {
  return (
    <div className="horizontalcards card mb-3 ">
      <div className="row no-gutters">
        <div className="col-md-4 ">
          <img
            className="card-img  "
            width="100%"
            height="100%"
            src="https://picsum.photos/100/100"
            alt="picsum"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body text-white">
            <h4 className="card-title">{data.title}</h4>
            <p className="card-text">{data.content}</p>

            <p className="article-link text-right text-font-bold">
              <a href={data.url}>Read more...</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
