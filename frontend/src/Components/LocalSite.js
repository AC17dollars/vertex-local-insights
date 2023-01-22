import React from "react";
import Navbar from "./Navbar";
import "./localsite.css";
import Card from "./Card";
import { ButtonOutlined } from "./Buttons/Button";
import Showguide from "./Showguide";
import io from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import { ConstructionOutlined } from "@mui/icons-material";

function LocalSite() {
  const [info, setInfo] = useState({});
  const [guide, setGuide] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState("Pimbahal");
  const socket = useRef(null);
  const [showdialog, setShowdialog] = React.useState(false);
  const handleclick = () => {
    if (socket.current) {
      socket.current.emit("role", {
        type: "tourist",
        location: "Pimbahal",
        name: "Saugat",
        contactNumber: "9847345678",
      });
      socket.current.emit("request", "Hello");
    }
    setShowdialog(true);
  };
  const closedialog = () => {
    setShowdialog(false);
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
        console.log(data.UserInfo);
      });
    socket.current = io.connect("http://localhost:3005", {
      transports: ["websocket"],
    });
    socket.current.on("accepted", (data) => {
      console.log(data);
      setGuide({
        name: "Nimesh",
        phone: "9847123456",
      });
    });
  }, []);
  // useEffect(() => {
  //   socket.current = io.connect("http://localhost:3005", {
  //     transports: ["websocket"],
  //   });
  //   socket.current.on("accepted", (data) => {
  //     console.log(data);
  //     setGuide(data);
  //   });
  // }, []);
  return (
    <>
      <Navbar />
      <div className="localsite">
        <Showguide
          opendialog={showdialog}
          closedialogbox={closedialog}
          guideInfo={guide}
        />
        <header className="localsite-title">
          <h1>Pimbahal</h1>
          {/* <button onClick={handleclick}>Book a guide</button> */}
          <ButtonOutlined
            btntitle="Book a guide"
            onRegister={handleclick}
          ></ButtonOutlined>
          {/* <ButtonOutlined btntitle="Book a guide" onRegister={handleclick} /> */}
        </header>
        <section className="localsite-info">
          <p>
            There are various legends concerning how the pond was built. One
            says that around the 14th century, Pimbahal was just empty ground.
            During the day, it was an active place but at night, it was said to
            be wandered by Lakheys, a type of demon in Nepalese folklore.
            Lakheys would come every night and make loud noises, break into
            homes, scare children and cause a disturbance in the area. Local
            resident Gaya Baje became annoyed by their acts, so he used his
            magical powers to control them and made them dig a pond at Pimbahal
            because "as long as the ground existed, the Lakheys would keep
            coming". According to another legend, Lakhey's wife had to travel
            far away to get water during wintertime because the taps would run
            dry. There were no ponds in Lalitpur during that time and, not
            wanting to see his wife have to walk far, the demon built the
            Pimbahal Pond in one night.
          </p>
          <div>
            <img src="https://pbs.twimg.com/media/Dl7znbQV4AADmr8.jpg" />
          </div>
        </section>
        <section className="upcomingevents">
          <h2>Upcoming Events</h2>
          <div class="events">
            <div className="event-card">
              <div className="event-card-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kartik_Naach_%2847173446421%29.jpg/440px-Kartik_Naach_%2847173446421%29.jpg" />
              </div>
              <div className="event-card-title-row">
                <div className="event-card-left">
                  <h2>AUG</h2>
                  <h2 bold>21</h2>
                </div>
                <div className="event-card-right">
                  <div className="event-card-time">
                    <h6>5PM - 9PM</h6>
                    <h2 bold>Kartik Naach</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-card">
              <div className="event-card-image">
                <img src="https://english.onlinekhabar.com/wp-content/uploads/2017/09/Indra-jatra-2017-7.jpg" />
              </div>
              <div className="event-card-title-row">
                <div className="event-card-left">
                  <h2>JUN</h2>
                  <h2 bold>21</h2>
                </div>
                <div className="event-card-right">
                  <div className="event-card-time">
                    <h6>10AM - 3PM</h6>
                    <h2 bold>Indra Jatra</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-card">
              <div className="event-card-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nepalese_lakhe_dancer.jpg/1200px-Nepalese_lakhe_dancer.jpg" />
              </div>
              <div className="event-card-title-row">
                <div className="event-card-left">
                  <h2>SEP</h2>
                  <h2 bold>11</h2>
                </div>
                <div className="event-card-right">
                  <div className="event-card-time">
                    <h6>6PM - 8PM</h6>
                    <h2 bold>Lakhey Dance</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-card">
              <div className="event-card-image">
                <img src="https://s3.ap-south-1.amazonaws.com/chsfiles/media/R1w8vd1opL03bsWPiYy8b8T17l7Rcs5jwqyrVJ7W.jpeg" />
              </div>
              <div className="event-card-title-row">
                <div className="event-card-left">
                  <h2>NOV</h2>
                  <h2 bold>18</h2>
                </div>
                <div className="event-card-right">
                  <div className="event-card-time">
                    <h6>6PM - 10PM</h6>
                    <h2 bold>Tharu Dance</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Local Food</h2>
          <div className="food">
            <Card
              name="Kothey Momo"
              district="Pimbahal"
              image="https://imgs.search.brave.com/fdb_9LgqWXsgeyA5im6cKKABH4mNg3md3WnH10Varec/rs:fit:1000:667:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly0tZTBVNklseVVn/NC9VWk1SbExoaUVM/SS9BQUFBQUFBQUJ1/dy9pUU14REVnejJD/dy9zMTYwMC9LT1RI/RVkrTU9NTy5qcGc"
            />
            <Card
              name="Choila"
              district="3G Honacha"
              image="https://1.bp.blogspot.com/-QYGs5GUYvjs/YJ6Myz9wCRI/AAAAAAAAMZo/xcAavS21fQUzBFTxTRwOq9muemqmFTTzgCLcBGAsYHQ/s627/IMG_20210514_202808.jpg"
            />
            <Card
              name="Rildolk"
              district="Sherpa Food Bouddha"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_jSKsvGX5PbYsxENdWiEE-G6Cq_GHNA_7Q&usqp=CAU"
            />
            <Card
              name="Samaya Bhaji"
              district="Sasa"
              image="https://cdn.tasteatlas.com/images/dishes/856738bc40274f5694e144c242195a0c.jpg"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default LocalSite;
