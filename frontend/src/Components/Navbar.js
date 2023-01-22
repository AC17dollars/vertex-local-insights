import React from "react";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./nav.css";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const profileOpenClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const profileCloseClick = () => {
    setAnchorEl(null);
  };
  const handlelogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const [openSignup, setOpenSignup] = React.useState(false);
  const openSignupForm = () => {
    setOpenSignup(true);
  };
  const closeSignup = () => {
    setOpenSignup(false);
  };
  const handleguide = () => {
    openSignupForm();
  };
  const [displaySignIn, setDisplaySignIn] = React.useState(false);
  const [email, setEmail] = React.useState(null);
  const handlelogin = () => {
    setDisplaySignIn(true);
  };
  const handleloginclose = () => {
    setDisplaySignIn(false);
  };
  useEffect(() => {
    fetch("http://localhost:3005/auth/login", {
      method: "POST",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.token && setEmail(data.email);
      });
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink
            to="/"
            className="navbar-logo"
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#439A97",
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "helvetica",
                letterSpacing: ".2rem",
                textDecoration: "none",
                lineHeight: "1",
              }}
            >
              LOCAL <br /> INSIGHTS
            </Typography>
          </NavLink>
        </div>
        <div className="navbar-center">
          <div className="navbar-search">
            <div className="navbar-search-icon">
              <SearchIcon sx={{ color: "#439A97" }}></SearchIcon>
            </div>
            <input></input>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-guide">
            {email ? (
              <Typography
                sx={{
                  color: "#439A97",
                  fontSize: "1rem",
                  fontFamily: "helvetica",
                  textDecoration: "none",
                }}
              >
                Hi, You are logged in
              </Typography>
            ) : (
              <Typography
                sx={{
                  color: "#439A97",
                  fontSize: "1rem",
                  fontFamily: "helvetica",
                  textDecoration: "none",
                }}
                onClick={handleguide}
              >
                Become A Guide
              </Typography>
            )}
          </div>
          <div className="navbar-login">
            {email ? (
              <div className="hero-top-right-account">
                <IconButton
                  sx={{ color: "#439A97" }}
                  id="profile-button"
                  aria-controls={open ? "profile-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={profileOpenClick}
                >
                  <AccountCircleIcon
                    sx={{ fontSize: 35, mr: 2 }}
                  ></AccountCircleIcon>
                </IconButton>
                <Menu
                  id="profile-menu"
                  aria-labelledby="profile-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={profileCloseClick}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <NavLink to="/portal" style={{ textDecoration: "none" }}>
                    <MenuItem
                      onClick={profileCloseClick.Close}
                      sx={{
                        color: "#202329",
                        fontSize: 15,
                      }}
                    >
                      My Portal
                    </MenuItem>
                  </NavLink>

                  <MenuItem
                    onClick={handlelogout}
                    sx={{
                      color: "#202329",

                      fontSize: 15,
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
                <Typography
                  sx={{
                    color: "#439A97",
                    fontSize: "1rem",
                    fontFamily: "helvetica",
                    textDecoration: "none",
                  }}
                >
                  User
                </Typography>
              </div>
            ) : (
              <Typography
                sx={{
                  color: "#439A97",
                  fontSize: "1rem",
                  fontFamily: "helvetica",
                  textDecoration: "none",
                }}
                onClick={handlelogin}
              >
                Login
              </Typography>
            )}
            <SignIn open={displaySignIn} onClose={handleloginclose} />
            <SignUp
              openSignup={openSignup}
              closeSignup={closeSignup}
              title="Become a guide"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
