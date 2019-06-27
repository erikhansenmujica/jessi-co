import React from "react";

const style = {
  div: {
    width: "45%",
    margin: "auto",
    display: "block"
  }, 
  text:{
    textAlign: "center", 
    fontSize:'18px'
  }
};

export default () => {
  return (
    <div className="container">
      <br />

      <div className="card" style={style.div}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>Name: </h3>
          </li>
          <li className="list-group-item">
            <h3>Last-Name: </h3>
          </li>
          <li className="list-group-item">
            <h3>Email: </h3>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0"  style={style.text}>
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
               
              >
                <h3>Historial de Ordenes</h3>
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Orden 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Optio veniam magnam, beatae pariatur dolorem odit velit distinctio
              temporibus accusantium dolore ratione vel, tempora dicta iste
              ipsa? Exercitationem voluptatibus eius eligendi!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
