import React from "react";
import Button from "@mui/material/Button";

function ButtonContained(props) {
  return (
    <>
      <Button
        type={props.Type}
        variant="contained"
        sx={{
          bgcolor: "#439a97",
          color: "#fff",
          width: "100%",
          borderRadius: "15px",
          fontSize: ".9rem",
          "&:hover": {
            transition: "0.5s",
            transform: "scale(1.05)",
            bgcolor: "#439a97",
            color: "#fff",
            width: "100%",
            borderRadius: "15px",
          },
        }}
      >
        {props.btntitle}
      </Button>
    </>
  );
}
function ButtonOutlined(props) {
  return (
    <>
      <Button
        type={props.Type}
        onClick={props.onRegister}
        variant="outlined"
        sx={{
          bgcolor: "#fff",
          color: "#439a97",
          borderRadius: "15px",
          fontSize: ".8rem",
          border: "1px solid #439a97",
          "&:hover": {
            transition: "0.5s",
            transform: "scale(1.1)",
            bgcolor: "#fff",
            color: "#439a97",
            borderRadius: "15px",
            border: "1px solid #439a97",
          },
        }}
      >
        {props.btntitle}
      </Button>
    </>
  );
}

export { ButtonContained, ButtonOutlined };
