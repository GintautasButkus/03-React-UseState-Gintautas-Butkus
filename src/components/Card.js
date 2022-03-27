import React, { useState } from "react";


export default function Card({cardImage, cardText, cardLearning}) {
  const[task, setTask] = useState({
    done: "Mokausi",
    status: false,
  });

  function changeStatus(){
    setTask((previousState) => {
      return {...previousState, status: true };
    });
  }

  return (
    
      <div className="col-md-4">
              <div className="card mb-4 box-shadow">
              <img src={cardImage} alt="Image language " />
                <div className="card-body">
                  <p className="card-text">{cardText}</p>
                  <p className="card-text">{task.status ? cardLearning : task.done }</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button onClick={changeStatus} type="button" className="btn btn-sm">OK</button>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}
