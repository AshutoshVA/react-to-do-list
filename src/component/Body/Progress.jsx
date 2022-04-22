import React from 'react'


const Progress = (props) => {

    let progress = (type) => {

        // if(props.taskItems==0){
        let count = props.taskItems.filter((item) => item.name === type).length;
        
        let progress = (count / props.taskItems.length) * 100;
        return isNaN(progress) ? 0: progress;
    }

    return (
        <div>
            {/* Progress Card  */}

            <div className="card">

                <div className="card-body">
                    <h5 className="card-title text-center">Progress</h5>

                    <table className="table mt-2">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ashutosh</td>

                                <td>
                                    <div className="progress mt-2" style={{ height: "8px" }}>
                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={progress("Ashutosh")} aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: progress("Ashutosh") + "%" }}></div>
                                    </div>
                                </td>

                            </tr>


                            <tr>
                                <th scope="row">2</th>
                                <td>Devraj</td>

                                <td>
                                    <div className="progress mt-2" style={{ height: "8px" }}>
                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={progress("Devraj")} aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: progress("Devraj") + "%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Nikita</td>

                                <td>
                                    <div className="progress mt-2" style={{ height: "8px" }}>
                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={progress("Nikita")} aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: progress("Nikita") + "%" }}></div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">3</th>
                                <td>Prajakta</td>

                                <td>
                                    <div className="progress mt-2" style={{ height: "8px" }}>
                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={progress("Prajakta")} aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: progress("Prajakta") + "%" }}></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    )
}

export default Progress