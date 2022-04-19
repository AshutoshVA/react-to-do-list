import "./App.css";
import NavBar from "./component/NavBar";
import Buttons from "./component/Body/Buttons";
import Footer from "./component/Footer";
import Table from "./component/Body/Table";
import React, { useState } from "react";

function App() {
  

  let [taskItems, updateTaskItems] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Buttons />
      <Table
        
        taskItems={taskItems}
        updateTaskItems={updateTaskItems}
      />

      <Footer />
    </div>
  );
}

export default App;
