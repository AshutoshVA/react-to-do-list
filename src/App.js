import "./App.css";
import NavBar from "./component/NavBar";
import Buttons from "./component/Body/Buttons";
import Footer from "./component/Footer";
import Table from "./component/Body/Table";
import Progress from "./component/Body/Progress";
import React, { useState } from "react";

function App() {


  let [taskItems, updateTaskItems] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Buttons taskItems={taskItems} />


      <div className="container mt-5">
        <div className="row">
        <div className="col-lg-6 mb-4">
          <Table
            taskItems={taskItems}
            updateTaskItems={updateTaskItems}
          />
          </div>

          <div className="col-lg-4 mb-4">
            <Progress taskItems={taskItems}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
