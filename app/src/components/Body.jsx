import React from "react"
import RecentsSection from "./RecentsSection";
import InterestSection from "./InterestSection";

function Body() {
    return (
        <>
            <div className="container-fluid text-color-light text-font-regular">
                <div className="row">
                    <div className="col-lg-9 col-sm-7">  <InterestSection /></div>
                    <div className="col-lg-3 col-sm-5"><RecentsSection /></div>
                </div>
            </div>
        </>

    )
}
export default Body

