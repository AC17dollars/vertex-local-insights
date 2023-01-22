import React from "react";
import "./tourists.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
function Tourists({ itm, indx }) {
  const handleAccept = (p) => {
    console.log(p);
    socket.current.emit("accept", {
      location: location,
      name: "TBB DEjjDE",
      contactNumber: "123456789",
      socketid: p,
    });
  };
  const handleReject = () => {};
  const SN = 1;
  return (
    <>
      <div className="tourists-category">
        <div className="tourists-category-title">
          <h6>SN</h6>
          <h6>Tourists Name</h6>
          <h6>Selected Location</h6>
          <h6>Price</h6>
          <h6>Accept</h6>
          <h6>Reject</h6>
        </div>
        <div className="tourists tourists-category-title">
          <h6>{indx}</h6>
          <h6>{itm.name}</h6>
          <h6>{itm.location}</h6>
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
      </div>
    </>
  );
}
export default Tourists;
