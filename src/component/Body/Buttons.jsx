import React from "react";
import "../Body/Buttons.css";

const Buttons = (props) => {

  let filerBackLog=(type)=>{
    return props.taskItems.filter((task)=>task.status===type);
  }
  let filerInProgress=(type)=>{
    return props.taskItems.filter((task)=>task.status===type);
  }
  let filerOnHold=(type)=>{
    return props.taskItems.filter((task)=>task.status===type);
  }
  let filerDone=(type)=>{
    return props.taskItems.filter((task)=>task.status===type);
  }



  return (
    <div>
      {/* Option buttons  */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-6 mx-auto">
            <button type="button" className=" text-white ms-5 d-inline p-2 btn btn-bg">
              
                Back Log:{filerBackLog("backlog").length}
         
            </button>

            <button type="button" className=" text-white ms-5 d-inline p-2 btn btn-bg">
             
                In Progress:{filerInProgress("inprogress").length}
        
            </button>

            <button type="button" className=" text-white ms-5 d-inline p-2 btn btn-bg">
             
                On Hold:{filerOnHold("onhold").length}
              
            </button>

            <button type="button" className="text-white ms-5 d-inline p-2 btn btn-bg">
             
                Done:{filerDone("done").length}
           
            </button>
          </div>
        </div>
      </div>
      
       {/* End of option buttons  */}

    </div>
  );
};

export default Buttons;
