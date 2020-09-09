import React from "react"
import RecentsSection from "./RecentsSection";
import InterestSection from "./InterestSection";

function Body(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-9">  <InterestSection /></div>
                <div className="col"><RecentsSection /></div>
            </div>
        </div>
    </>

    )
    }
export default Body

