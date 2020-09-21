import React from 'react';
import RecentsSection from './RecentsSection';
import InterestSection from './InterestSection';

function Body() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9">
            <InterestSection />
          </div>
          <div className="col-sm-3">
            <RecentsSection />
          </div>
        </div>
      </div>
    </>
  );
}
export default Body;
