import React from "react";
import { ButtonContained } from "./Buttons/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import "./form.css";
import Otp from "./Otp";
function SignUp(props) {
  const { openSignup, closeSignup, title } = props;
  const [openOtp, setOpenOtp] = React.useState(false);
  const closeOtp = () => {
    setOpenOtp(false);
  };
  const handleClose = () => {
    closeSignup();
    setIsSubmitting(false);
    setFormErrors({});
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    email: "",
    password: "",
    repassword: "",
    gender: "",
    isGuide: false,
    contactNumber: null,
    location: "",
  };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const submitForm = () => {
    // fetch("http://localhost:3005/auth/create", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: formValues.email,
    //     hash: formValues.password,
    //     userInfo: {
    //       firstName: formValues.firstName,
    //       lastName: formValues.lastName,
    //       contactNumber: formValues.contactNumber,
    //       gender: formValues.gender,
    //       dateOfBirth: formValues.dateOfBirth,
    //       isGuide: formValues.isGuide,
    //     },
    //     guideInfo: {
    //       location: formValues.location,
    //     },
    //   }),
    // });
    fetch("http://localhost:3005/otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: formValues.contactNumber,
      }),
    }).then(() => {
      setOpenOtp(true);
    });

    closeSignup();
    //setFormValues(initialValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(formErrors);
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
    const regexPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (!regexPassword.test(values.password)) {
      errors.password = "Password must contain number, alphabet and symbol";
    }
    if (values.password !== values.repassword) {
      errors.repassword = "Password must match eachother";
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = "Cannot be blank";
    }
    if (!values.firstName) {
      errors.firstName = "Cannot be blank";
    }
    if (!values.lastName) {
      errors.lastName = "Cannot be blank";
    }
    if (!values.contactNumber) {
      errors.contactNumber = "Cannot be blank";
    } else if (isNaN(values.contactNumber)) {
      errors.contactNumber = "Must be number";
    } else if (values.contactNumber.length !== 10) {
      errors.contactNumber = "Must be 10 digits";
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
        open={openSignup}
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
          <h1>{title}</h1>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="entry name">
            {/* <label for="name">Name</label> */}
            <div className="subentry">
              <div className="nameEnter">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  className={formErrors.firstName && "input-error"}
                />
                {formErrors.firstName && (
                  <span
                    className="error"
                    style={{ color: "red", fontSize: "13px" }}
                  >
                    {formErrors.firstName}
                  </span>
                )}
              </div>
              <div className="nameEnter">
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
                {formErrors.lastName && (
                  <span
                    className="error"
                    style={{ color: "red", fontSize: "13px" }}
                  >
                    {formErrors.lastName}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="entry dateOfBirth">
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formValues.dateOfBirth}
              onChange={handleChange}
            />
            {formErrors.dateOfBirth && (
              <span
                className="error"
                style={{ color: "red", fontSize: "13px" }}
              >
                {formErrors.dateOfBirth}
              </span>
            )}
          </div>

          <div className="entry email">
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
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
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <span
                className="error"
                style={{ color: "red", fontSize: "13px" }}
              >
                {formErrors.password}
              </span>
            )}
          </div>
          <div className="entry repassword">
            <input
              type="password"
              id="repassword"
              placeholder="Confirm Password"
              name="repassword"
              value={formValues.repassword}
              onChange={handleChange}
            />

            {formErrors.repassword && (
              <span
                className="error"
                style={{ color: "red", fontSize: "13px" }}
              >
                {formErrors.repassword}
              </span>
            )}
          </div>
          <div className="entry contactNumber">
            <input
              type="tel"
              id="contactNumber"
              placeholder="Contact Number"
              name="contactNumber"
              value={formValues.contactNumber}
              onChange={handleChange}
            />
            {formErrors.contactNumber && (
              <span
                className="error"
                style={{ color: "red", fontSize: "13px" }}
              >
                {formErrors.contactNumber}
              </span>
            )}
          </div>
          {/* <div className="subentry"> */}
          <div className="gender entry ">
            <div className="genderinputs">
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />
            </div>
            <div className="genderinputs">
              <label>Female</label>

              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />
            </div>
            <div className="genderinputs">
              <label>Other</label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="isGuide entry ">
            <label for="isGuide">I am a guide</label>
            <input
              type="checkbox"
              id="isGuide"
              name="isGuide"
              onChange={(e) => {
                setFormValues({ ...formValues, isGuide: e.target.checked });
              }}
            />
          </div>
          {formValues.isGuide && (
            <div className="entry">
              <select
                onChange={(e) => {
                  setFormValues({ ...formValues, location: e.target.value });
                }}
              >
                <option value="location" disabled selected>
                  Location To Serve
                </option>
                <option value="pimbahal">Pimbahal</option>
                <option value="bauddha">Bauddha</option>
                <option value="bagBhairab">Bag Bhairab</option>
                <option value="siddhaPokhari">Siddha Pokhari</option>
              </select>
            </div>
          )}
          <ButtonContained btntitle="Register" Type="submit" />
        </form>
      </Dialog>
      <Otp
        open={openOtp}
        onClose={closeOtp}
        title="OTP"
        signUpValues={formValues}
      />
    </>
  );
}

export default SignUp;
