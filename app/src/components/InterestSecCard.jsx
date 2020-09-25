import React from 'react';

function InterestSecCard() {
  return (
    <div className="col-sm-4">
      <div className="interestseccard card ">
        <img
          className="card-img-top"
          width="200px"
          height="200px"
          src="https://picsum.photos/200/200"
          alt="picsum"
        ></img>
        <div className="card-header">
          <h4 className="text-color-light">Card-title</h4>
        </div>
        <div className="card-body text-light">
          <p className="card-text">Lorem ipsum lorem ipsum lorem ipsum lorem</p>
          <p className="card-text text-right">
            <a className="linkstyle" href="#">Read more ..</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default InterestSecCard;
