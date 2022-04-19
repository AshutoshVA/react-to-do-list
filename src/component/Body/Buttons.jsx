import React from "react";
import "../Body/Buttons.css";

const Buttons = () => {
  return (
    <div>
      {/* Option buttons  */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-5 mx-auto">
            <button type="button" className=" ms-5 d-inline p-2 btn btn-bg">
              <a href="" className="option-btn-css">
                Backlog
              </a>
            </button>

            <button type="button" className=" ms-5 d-inline p-2 btn btn-bg">
              <a href="" className="option-btn-css">
                In Progress
              </a>
            </button>

            <button type="button" className=" ms-5 d-inline p-2 btn btn-bg">
              <a href="" className="option-btn-css">
                On Hold
              </a>
            </button>

            <button type="button" className=" ms-5 d-inline p-2 btn btn-bg">
              <a href="" className="option-btn-css">
                Done
              </a>
            </button>
          </div>
        </div>
      </div>
      
       {/* End of option buttons  */}

    </div>
  );
};

export default Buttons;
