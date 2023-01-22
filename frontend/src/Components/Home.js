import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Crousel from "./Crousel";
import "./localsite.css";
import Card from "./Card";
function Home() {
  return (
    <>
      <Hero />
      <Crousel title="Trending Local Sites" />
      <section style={{ margin: "20px" }}>
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
      <section className="upcomingevents" style={{ margin: "20px" }}>
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
    </>
  );
}

export default Home;
