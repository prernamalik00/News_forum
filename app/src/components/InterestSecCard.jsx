import React from "react";

function InterestSecCard() {
  return (
    <div className="col-4">
      <div className="interestseccard card bg-transparent ">
        <img
          className="card-img-top"
          width="100%"
          height="100%"
          srcset="https://cdn.pixabay.com/photo/2020/04/20/09/42/seagulls-5067489_960_720.jpg 1x, https://cdn.pixabay.com/photo/2020/04/20/09/42/seagulls-5067489_1280.jpg 1.333x"
          src="https://cdn.pixabay.com/photo/2020/04/20/09/42/seagulls-5067489_960_720.jpg"
          alt="Seagulls, Row, Birds, Environment, Bird"
        ></img>
        <div className="card-header">
          <h4>Card-title</h4>
        </div>
        <div className="card-body text-light">
          <p className="card-text">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>

          <p className="card-text text-right">
            <small className="text-muted"> Read more -- </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InterestSecCard;
