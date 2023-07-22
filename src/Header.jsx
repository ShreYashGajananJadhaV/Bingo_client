import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Header() {
  const [value, setvalue] = useState("");
  const [username, setusername] = useState("");
  const [pass, setpass] = useState("");

  const requestOptions = {
    method: "POST", // Use the POST method to send data to the server
    headers: {
      "Content-Type": "application/json", // Set the request content type to JSON
    },
    body: JSON.stringify({
      username: username, // Assuming 'username' and 'password' are state variables
      password: pass,
    }),
    // Convert the data object to a JSON string
  };

  const callAPI = () => {
    fetch(
      "https://bingoserver-production.up.railway.app/content",
      requestOptions
    )
      .then((res) => res.text())
      .then((res) => setvalue(res));
  };

  return (
    <div>
      <div
        className="container-fluid row-12 col-12"
        style={{
          backgroundImage: `url(https://wallpaperaccess.com/full/7924192.gif)`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="container col-5 p-3  rounded-5 border border-start-9 "
        style={{
          width: "50%",
          position: "absolute",
          top: "30%",
          height: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1
          className="mb-3 text-center"
          style={{
            fontFamily: "Fantasy",
          }}
        >
          Connection Page
        </h1>
        <div className="title"></div>
        <div class="form-floating mb-3 text-center">
          <input
            type="name"
            class="form-control"
            id="floatingInput"
            placeholder="Username"
            onChange={(event) => {
              setusername(event.target.value);
            }}
          />
          <label for="floatingInput">UserName</label>
        </div>

        <div class="form-floating col align-self-center">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(event) => {
              setpass(event.target.value);
            }}
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="buttons text-center mt-3 ">
          <button
            type="submit"
            onClick={callAPI}
            class="btn btn-info btn btn-outline-dark btn-lg mt-2px m-2px"
          >
            Submit
          </button>
        </div>
        <div>
          <h2 className="mb-3 text-center">{value}</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
