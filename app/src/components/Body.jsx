import React from 'react';
import RecentsSection from './RecentsSection';
import InterestSection from './InterestSection';
import Drawer from './Drawer';

function Body() {
  return (
    <>
      <Drawer />
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
