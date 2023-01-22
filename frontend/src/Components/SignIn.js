import * as React from "react";
import { ButtonContained, ButtonOutlined } from "./Buttons/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import "./form.css";
import SignUp from "./SignUp";
export default function SignIn(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
    setIsSubmitting(false);
    setFormErrors({});
    setFormValues(intialValues);
  };
  const [openSignup, setOpenSignup] = React.useState(false);
  const openSignupForm = () => {
    setOpenSignup(true);
  };
  const closeSignup = () => {
    setOpenSignup(false);
  };
  const handleRegister = () => {
    handleClose();
    openSignupForm();
  };
  const intialValues = { email: "", hash: "" };
  const [formValues, setFormValues] = React.useState(intialValues);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const submitForm = () => {
    console.log("submitting the form");
    fetch("http://localhost:3005/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data._id);
        window.location.reload();
      });
    handleClose();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const validate = (values) => {
    let errors = {};
    const regexEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.hash) {
      errors.hash = "Cannot be blank";
    }
    return errors;
  };
  React.useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
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
        <div className="close">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="title">
          <h1>SignIn</h1>
          <ButtonOutlined
            btntitle="Register"
            onRegister={handleRegister}
          ></ButtonOutlined>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="entry email">
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className={formErrors.email && "input-error"}
              placeholder="Email"
            />
            {formErrors.email && (
              <span
                className="error"
                style={{ color: "red", fontSize: "13px" }}
              >
                {formErrors.email}
              </span>
            )}
          </div>
          <div className="entry password">
            <input
              type="password"
              id="password"
              name="hash"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Password"
              className={formErrors.hash && "input-error"}
            />
            {formErrors.hash && (
              <span
                className="error"
                style={{ color: "red", fontSize: "13px" }}
              >
                {formErrors.hash}
              </span>
            )}
          </div>
          <div className="mics">
            <div className="forgot-password">
              <a href="/">Forgot Password?</a>
            </div>
            <div className="vertical-div"></div>
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember Me</label>
            </div>
          </div>
          <div className="button">
            <ButtonContained btntitle="Sign In" Type="submit"></ButtonContained>
          </div>
        </form>
      </Dialog>
      <SignUp
        openSignup={openSignup}
        closeSignup={closeSignup}
        title="Register"
      />
    </>
  );
}
