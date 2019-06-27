import React from "react";
import { Link } from "react-router-dom";

const style = {
  text: {
    textAlign: "center",
    fontSize: "42px"
  },
  square: {
    padding: "10px"
  },
  padding: {
    paddingTop: "55px"
  },
  prueba:{
      display: "block",
      margin:"auto"
  }
};
export default () => (
  <div className="container">
    <div className="jumbotron" style={style.square}>
      <div style={style.padding}>
        <h1 style={style.text}>Lista de Ordernes</h1>
      </div>
      <p className="lead">.</p>
      <Link to="/order">
        <button
        style={style.prueba}
          className="btn btn-lg btn-dark "
          href="/docs/4.3/components/navbar/"
          role="button"
        >
          View Orders &raquo;
        </button>
      </Link>
    </div>
    <div className="jumbotron" style={style.square}>
      <div style={style.padding}>
        <h1 style={style.text}>Agregar Productos</h1>
      </div>
      <p className="lead">.</p>
      <Link to="/add">
        <button
        style={style.prueba}
          className="btn btn-lg btn-dark"
          href="/docs/4.3/components/navbar/"
          role="button"
        >
          Add Products &raquo;
        </button>
      </Link>
    </div>
    <div className="jumbotron" style={style.square}>
      <div style={style.padding}>
        <h1 style={style.text}>Lista de Usuarios</h1>
      </div>
      <p className="lead">.</p>
      <Link to="/users">
        <button
        style={style.prueba}
          className="btn btn-lg btn-dark"
          href="/docs/4.3/components/navbar/"
          role="button"
        >
          View List &raquo;
        </button>
      </Link>
    </div>
  </div>
);
