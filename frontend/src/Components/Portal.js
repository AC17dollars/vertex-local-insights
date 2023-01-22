import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import "./portal.css";
import io from "socket.io-client";
import "./tourists.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
function Portal() {
  const [info, setInfo] = useState({});
  const handleAccept = (p) => {
    console.log(p);
    socket.current.emit("accept", {
      location: "Pimbahal",
      name: "Nimesh",
      contactNumber: "9847123456",
      socketid: p,
    });
  };
  const handleReject = () => {};
  const [checked, setChecked] = useState(false);
  const [request, setRequest] = useState([]);
  const [location, setLocation] = useState("");
  const socket = useRef(null);
  const handleCheck = (e) => {
    console.log(e);
    if (socket.current) {
      socket.current.emit("role", {
        type: "guide",
        location: "Pimbahal",
        name: "Nimesh",
        phone: "9847123456",
      });
    }
    setChecked(e.target.checked);
  };
  useEffect(() => {
    fetch("http://localhost:3005/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: localStorage.getItem("id"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.UserInfo);
      });
    socket.current = io.connect("http://localhost:3005", {
      transports: ["websocket"],
    });
    socket.current.on("request", (DATA) => {
      setRequest((prevReq) => [...prevReq, DATA]);
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="portal-top">
        <div className="portal-heading">
          <div className="portal-heading-greetings">
            <h1>Welcome Back Nimesh</h1>
            <p>Here are your trips and stats</p>
          </div>
          <div className="portal-heading-image">
            <img src="https://img.freepik.com/free-vector/decision-making-abstract-concept_335657-3039.jpg?w=996&t=st=1674370138~exp=1674370738~hmac=396f812ba11aa9811fa081b89aa9a1eb35ebf7b7379d476f358f65a7aa037ce3" />
          </div>
        </div>
      </section>
      <section className="portal-content">
        <div className="portal-content-sidebar">
          <div className="portal-content-sidebar-toogle">
            <label>Are You Available?</label>
            <input
              type="checkbox"
              onChange={(e) => {
                handleCheck(e);
              }}
            />
          </div>
          <div className="portal-content-sidebar-location">
            <label>Preffered Location</label>
            <select
              name="location"
              id="location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              <option value="Pimbahal">Pimbahal</option>
              <option value="Bag Bhairab">Bag Bhairab</option>
              <option value="Bauddha">Bauddha</option>
              <option value="Siddhapokhari">Siddhapokhari</option>
            </select>
          </div>
        </div>
        <div className="portal-content-main">
          <div className="portal-content-main-title">
            <h1>Available Trips</h1>
          </div>
          <div className="portal-content-main-trips">
            <div className="tourists-category">
              <div className="tourists-category-title">
                <h6>SN</h6>
                <h6>Tourists Name</h6>
                <h6>Selected Location</h6>
                <h6>Price</h6>
                <h6>Accept</h6>
                <h6>Reject</h6>
              </div>
              {request.map((item, index) => {
                return (
                  <div className="tourists tourists-category-title">
                    {console.log(item)}
                    <h6>{index + 1}</h6>
                    <h6>{item.name}</h6>
                    <h6>{item.location}</h6>
                    <h6>350 nrs</h6>
                    <h6>
                      <DoneIcon
                        sx={{
                          color: "green",
                        }}
                        onClick={() => {
                          handleAccept(item.socketid);
                        }}
                      />
                    </h6>
                    <h6>
                      <CloseIcon
                        sx={{
                          color: "red",
                        }}
                        onClick={handleReject}
                      />
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <ul>
        {request.map((item, index) => {
          return (
            <>
              <li key={index}>
                Name : {item.name} Contact : {item.phone}{" "}
                <button onClick={handleAccept}>accept</button>
                <button onClick={handleReject}>reject</button>
              </li>
            </>
          );
        })}
      </ul> */}
    </>
  );
}

export default Portal;
