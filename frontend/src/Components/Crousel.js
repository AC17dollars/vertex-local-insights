import React from "react";
import Card from "./Card";
import "./crousel.css";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { NavLink } from "react-router-dom";
function Crousel({ title }) {
  return (
    <>
      <div className="crousel">
        <div className="crousel-title">
          <h2>{title}</h2>
          <WhatshotIcon
            sx={{
              color: "#fbe09a",
            }}
          />
        </div>
        <div className="crousel-cards">
          <NavLink to="/localsites" style={{ textDecoration: "none" }}>
            <Card
              name="Pimbahal"
              image="https://pbs.twimg.com/media/Dl7znbQV4AADmr8.jpg"
              district="Lalitpur"
            />
          </NavLink>

          <Card
            name="Banglamukhi"
            image="https://www.holidify.com/images/cmsuploads/compressed/1280px-SiddhaPokhari_20190717085636.jpg"
            district="Lalitpur"
          />
          <Card
            name="Bouddha"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Boudhanath_Stupa-IMG_7048.jpg/1200px-Boudhanath_Stupa-IMG_7048.jpg"
            district="Kathmandu"
          />
          <Card
            name="Bag Bhairab"
            image="https://lh3.googleusercontent.com/p/AF1QipPQ-FH-VQoxed8uEmReV-K3B6dedVXBuLSqNPHs=s1360-w1360-h1020"
            district="Kritipur"
          />
        </div>
      </div>
    </>
  );
}

export default Crousel;
