import React from "react";

const center = {
  textAlign: "center"
};

const letters = {
  fontSize: "20px"
};
const title = {
  textAlign: "center",
  fontSize: "56px"
};

export default ({ handleChange, handleSubmit }) => {
  return (
    <div className="container">
      <h1 style={title}>Agregar Productos</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label style={letters} className="col-sm-2 col-form-label">
            Nombre
          </label>
          <div className="col-sm-10">
            <input
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label style={letters} className="col-sm-2 col-form-label">
            Precio
          </label>
          <div className="col-sm-10">
            <input
              name="price"
              onChange={handleChange}
              type="number"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label style={letters} className="col-sm-2 col-form-label">
            Stock
          </label>
          <div className="col-sm-10">
            <input
              name="stock"
              type="number"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label style={letters} className="col-sm-2 col-form-label">
            Descripcion
          </label>
          <div className="col-sm-10">
            <input
              name="description"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label style={letters} className="col-sm-2 col-form-label">
            Imagenes (Links)
          </label>
          <div className="col-sm-10">
            <input
              name="images"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={center}>
          <button type="button" className="btn btn-primary">
            Add Category
          </button>

          <button type="button" className="btn btn-danger">
            Remove Category
          </button>
          <br />
          <br />
          <br />
          <div>
            <button type="submit" className="btn btn-primary btn-lg">
              Agregar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
