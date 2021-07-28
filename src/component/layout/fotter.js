import React from "react";

function Fotter() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal" style={{paddingLeft:"3px"}}>Abhilash CR</span>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external movies data API 
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{paddingLeft:"3px"}}
            >
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;