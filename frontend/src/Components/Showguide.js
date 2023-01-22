import { React, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./showguide.css";

function Showguide({ opendialog, closedialogbox, guideInfo }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return (
    <>
      <Dialog
        open={opendialog}
        onClose={closedialogbox}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#fff",
            borderRadius: "15px",
            width: "300px",
            height: "auto",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            padding: "20px",
          },
        }}
      >
        {loading ? (
          <div>Searching...</div>
        ) : (
          <div>
            <div className="title">
              <h1>Your Guide Is</h1>
            </div>
            <div className="guide">
              <div className="guide-image">
                <AccountCircleIcon
                  sx={{
                    color: "#439a97",
                  }}
                />
              </div>
              <div className="guide-details">
                <div className="guide-name">{guideInfo.name}</div>
                <div className="guide-number-price">
                  <div className="guide-number">{guideInfo.phone}</div>
                  <div className="guide-price">Price: 350</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
}

export default Showguide;
