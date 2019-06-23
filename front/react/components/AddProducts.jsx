import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Icon } from "semantic-ui-react";

const carouselStyle = {
  display: "block",
  width: "35%",
  height: "40%",
  margin: "auto",
  padding: "1%"
};
const iconStyle = {
  textAlign: "center"
};
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  icon: {
    height: "100vh"
  }
}));

export default () => {
  return (
    <div className='container'>
      <form>
        <div className="form-group">
          <h3>Titulo</h3>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <h3>Descripcion</h3>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <h3>Imagenes</h3>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Images"
          />
        </div>
      </form>
    </div>
  );
};
