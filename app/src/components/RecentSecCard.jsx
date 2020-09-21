import React from 'react';

function Card() {
  return (
    <div className="horizontalcards card mb-3 bg-transparent">
      <div className="row no-gutters">
        <div className="col-md-4 ">
          <img
            className="card-img  "
            width="100%"
            height="100%"
            src="https://picsum.photos/100/100"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body text-white">
            <h4 className="card-title"> Card title </h4>
            <p className="card-text">
              Lorem Lorem lorem lorem ipsum lorem ipsum lorem
            </p>
            <p className="card-text text-right">
              <a>Read more...</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
