import React from "react";
import "../Body/Table.css";
import def from "../assets/images/default.png";
import { useState } from "react";

const Table = (props) => {
  let [state, setState] = useState({ name: "", task: "" });

  let changeInput = (e) => {
    console.log(e.target.value);
    // setState(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let submitInput = (e) => {
    e.preventDefault();
    console.log(state);

    props.updateTaskItems((prev) => [
      ...prev,
      { name: state.name, task: state.task },
    ]);

    setState({ name: "", task: "" });

    console.log(props.taskItems);
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
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
                </div>

                <table className="table mt-2">
                  <thead>
                    <tr>
                      <th scope="col">Sr.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Profile</th>
                      <th scope="col">Task</th>
                      <th scope="col">Status</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <th scope="row">1</th>

                      <td>Ashutosh</td>

                      {props.taskItems.map((name) => (
                        <td name={name} kaey={name}>
                          {name.name}
                        </td>
                      ))}

                      <td>
                        <img className="image" src={def} alt="img" />
                      </td>

                      <td>task1</td>

                      {props.taskItems.map((task) => (
                        <td name={task} kaey={task}>
                          {task.task}
                        </td>
                      ))}

                      <td>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                      </td>
                      <td>
                        <i class="fa-solid fa-pen"></i>
                      </td>
                    </tr> */}

                    {props.taskItems.map((task) => (
                      <>
                        <tr>
                          <td className="counterCell"></td>
                          <td>{task.name}</td>
                          <td>{task.assignedTo}</td>
                          <td>
                            <img className="image" src={def} />
                          </td>
                          <td>{task.task}</td>
                          <td>
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                            />
                          </td>
                          <td>
                            <i class="fa-solid fa-pen"></i>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add task modal */}

      {/* Scrollable modal */}

      <div
        class="modal fade"
        id="myModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label class="form-label">Name</label>

                  <input
                    type="text"
                    value={state.name}
                    onChange={changeInput}
                    class="form-control"
                    id="name"
                    name="name"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label">Task</label>

                  <input
                    value={state.task}
                    type="text"
                    onChange={changeInput}
                    class="form-control"
                    id="task"
                    name="task"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                type="button"
                onClick={submitInput}
                class="btn btn-primary"
              >
                Add
              </button>
            </div>
            ``
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
