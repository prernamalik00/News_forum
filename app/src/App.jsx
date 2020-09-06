import React from 'react'
import RecentsSection from "./components/RecentsSection";
import InterestSection from "./components/InterestSection";
function App() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">  <InterestSection /></div>
                    <div className="col"><RecentsSection /></div>
                </div>
            </div>
        </>
    )
}
export default App
