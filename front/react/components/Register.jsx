import React from "react";

const style = {
  text: {
    textAlign: "center",
    fontFamily: "Gloria Hallelujah",
    fontSize: "72px"
  },
  button: {
    textAlign: "center"
  }
};

export default ({ handleChange, handleSubmit }) => {
  return (
    <div className="container">
      <h1 style={style.text}>REGISTRATE</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group shadow-sm p-3 mb-5 bg-white rounded">
          <label>Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group shadow-sm p-3 mb-5 bg-white rounded">
          <label>Last-Name</label>
          <input
            name="lastname"
            onChange={handleChange}
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Your Lastname"
          />
        </div>
        <div className="form-group shadow-sm p-3 mb-5 bg-white rounded">
          <label>Email</label>
          <input
            name="email"
            onChange={handleChange}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="youremail@example.com"
          />
        </div>
        <div className="form-group shadow-sm p-3 mb-5 bg-white rounded">
          <label>Password</label>
          <input
            name="password"
            onChange={handleChange}
            type="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="*******"
          />
        </div>
        <div style={style.button}>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            
          >
            Sign in
          </button>
        </div>
      </form>
      <div>
        <br />
        <br />
        <br />
        <footer>
          <p className="float-right" />
          <p>
            &copy; 2017-2019 Company, Inc. &middot; <a href="#">Privacy</a>{" "}
            &middot; <a href="#">Terms</a>
          </p>
        </footer>
      </div>
    </div>
  );
};
