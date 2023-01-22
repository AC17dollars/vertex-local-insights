import React from "react";
import { ButtonContained } from "./Buttons/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import "./form.css";

function Otp(props) {
  const intialValues = { otp: null };
  const [formValues, setFormValues] = React.useState(intialValues);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { onClose, open, signUpValues } = props;
  const handleClose = () => {
    onClose();
    setIsSubmitting(false);
    setFormErrors({});
    setFormValues(intialValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.otp) {
      errors.otp = "Cannot be blank";
    } else if (isNaN(values.otp)) {
      errors.otp = "Must be number";
    } else if (values.otp.length !== 6) {
      errors.otp = "Must be 6 digits";
    }
    return errors;
  };
  const submitForm = () => {
    fetch("http://localhost:3005/otp/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: signUpValues.contactNumber,
        enteredOtp: formValues.otp,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(signUpValues);
        if (data.verified === true) {
          fetch("http://localhost:3005/auth/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: signUpValues.email,
              hash: signUpValues.password,
              userInfo: {
                firstName: signUpValues.firstName,
                lastName: signUpValues.lastName,
                contactNumber: signUpValues.contactNumber,
                gender: signUpValues.gender,
                dateOfBirth: signUpValues.dateOfBirth,
                isGuide: signUpValues.isGuide,
              },
              guideInfo: {
                location: signUpValues.location,
              },
            }),
          });
        }
      });
    handleClose();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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
          <h1>OTP</h1>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="entry otp">
            <input
              type="number"
              id="otp"
              name="otp"
              value={formValues.otp}
              onChange={handleChange}
              className={formErrors.otp && "input-error"}
              placeholder="OTP"
            />
            {formErrors.otp && (
              <span
                className="error"
                style={{ color: "red", fontSize: "13px" }}
              >
                {formErrors.otp}
              </span>
            )}
          </div>
          <div className="button">
            <ButtonContained btntitle="Enter" Type="submit"></ButtonContained>
          </div>
        </form>
      </Dialog>
    </>
  );
}

export default Otp;
