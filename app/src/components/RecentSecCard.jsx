import React from 'react';

function Card() {
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
        <div className="col-md-8 p-2">
          <div className="card-body text-white">
            <h4 className="card-title"> Card title </h4>
            <p className="card-text">
              Lorem Lorem lorem lorem ipsum lorem ipsum lorem
            </p>
            <p className="card-text text-right">
              <a className="linkstyle" href="#">Read more ..</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
