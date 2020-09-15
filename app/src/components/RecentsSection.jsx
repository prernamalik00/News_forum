import React from 'react'

import HorizontalCards from "./HorizontalCards";



// const header = document.getElementById("subHeader");
// const stickyHeader = header.offsetTop;
// function myFunction() {
//   if (window.pageYOffset > stickyHeader) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


function RecentsSection() {
  return (
    
    <div className="  recents-container">
      <div className="recents-heading largetext-font "><h2> Today's Highlights </h2></div>
      <div className="scrollbar">
        <div className="news-section">
         <HorizontalCards />
          </div>
      </div>
    </div>
  )
}
export default RecentsSection