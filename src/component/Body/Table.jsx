import React from "react";
import "../Body/Table.css";
import def from "../assets/images/default.png";

import { useState } from "react";


const Table = (props) => {
  let [state, setState] = useState({ id: Math.floor(Math.random() * 9999999), name: "", task: "", status: "" });


  let changeInput = (e) => {
    console.log(e.target.value);
    // setState(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };


  let submitInput = (e) => {
    // console.log(state);
    if (state.task !== "") {
      e.preventDefault();

      props.updateTaskItems((prev) => [...prev, { id: state.id, name: state.name, task: state.task, status: state.status }]);

      setState({ id: Math.floor(Math.random() * 9999999), name: "", task: "", status: "" });

    } else {
      alert("field should not be blank")


    }
    console.log(props.taskItems);
  };


  // Delete Task Function
  let deleteTask = (e) => {

    console.log(e)
    const remainingTask = props.taskItems.filter((task) => task.id !== e);

    props.updateTaskItems(remainingTask);


  }

  // Edit Task Function

  let editTask = (e) => {

  
    const remainingTask = props.taskItems.filter((task) => task.id !== e);

    props.updateTaskItems(remainingTask);


  }




  return (
    <div>



      <div className="card">
        <div className="card-body ">

          <div>
            <span>
              <h5 className="card-title text-center">ToDo</h5>
            </span>


            <span>
              <i
                className="icon text-secondary fa-2x fa-solid fa-plus"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              ></i>
            </span>



            <table className=" table  mt-2 table-wrapper-scroll-y my-custom-scrollbar">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Task</th>
                  <th scope="col">Status</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>


                {props.taskItems.map((task) => (
                  <>
                    <tr>
                      <td className="counterCell"></td>
                      <th>{task.id}</th>
                      <td>{task.name}</td>
                      <td>
                        <img className="image" src={def} />
                      </td>
                      <td>{task.task}</td>
                      <td>{task.status}</td>
                      <td>
                        <i class="fa-solid fa-pen"></i>
                      </td>
                      <td>
                        <button className="btn btn-danger fa-solid fa-trash" onClick={() => deleteTask(task.id)}></button>
                      </td>
                      <td>
                        <button className="btn btn-warning fa-solid fa-pen-clip" data-bs-toggle="modal"
                          data-bs-target="#myModal1" onClick={() => editTask(task.id)}></button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>


        </div>

      </div>








      {/* Add task modal */}

      {/* Scrollable modal */}

      <div
        className="modal fade"
        id="myModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>

                <div className="form-group">
                  <label for="exampleFormControlFile1" >Assigned To </label>
                  <select className="form-control" value={state.name} onChange={changeInput} name="name">
                    <option selected>Select</option>
                    <option value="Ashutosh">Ashutosh</option>
                    <option value="Devraj">Devraj</option>
                    <option value="Nikita">Nikita</option>
                    <option value="Prajakta">Prajakta</option>
                  </select>
                </div>


                <div className="mb-3">
                  <label className="form-label">Task</label>

                  <input
                    value={state.task}
                    type="text"
                    onChange={changeInput}
                    className="form-control"
                    id="task"
                    name="task"
                  />
                </div>


                <div className="form-group">
                  <label for="exampleFormControlFile1" >Status</label>
                  <select className="form-control" value={state.status} onChange={changeInput} name="status">
                    <option selected>Select</option>
                    <option value="backlog">Back Log</option>
                    <option value="inprogress">In Progress</option>
                    <option value="onhold">On Hold</option>
                    <option value="done">Done</option>
                  </select>
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                type="button"
                onClick={submitInput}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Add
              </button>
            </div>

          </div>
        </div>
      </div>



      {/* Edit Task Modal */}



      <div
        className="modal fade"
        id="myModal1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>

                <div className="form-group">
                  <label for="exampleFormControlFile1" >Assigned To </label>
                  <select className="form-control" value={state.name} onChange={changeInput} name="name">
                    <option selected>Select</option>
                    <option value="Ashutosh">Ashutosh</option>
                    <option value="Devraj">Devraj</option>
                    <option value="Nikita">Nikita</option>
                    <option value="Prajakta">Prajakta</option>
                  </select>
                </div>


                <div className="mb-3">
                  <label className="form-label">Task</label>

                  <input
                    readOnly

                    value={props.taskItems.task}
                    type="text"
                    className="form-control"
                    id="task"
                    name="task"
                  />{props.taskItems.task}
                </div>


                <div className="form-group">
                  <label for="exampleFormControlFile1" >Status</label>
                  <select className="form-control" value={state.status} onChange={changeInput} name="status">
                    <option selected>Select</option>
                    <option value="backlog">Back Log</option>
                    <option value="inprogress">In Progress</option>
                    <option value="onhold">On Hold</option>
                    <option value="done">Done</option>
                  </select>
                </div>

              </form>
            </div>
            <div className="modal-footer">


              <button
                type="button"
                onClick={submitInput}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Table;
