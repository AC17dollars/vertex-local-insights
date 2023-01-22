import React from "react";
import Navbar from "./Navbar";
import "./searchguides.css";
function SearchGuide() {
  return (
    <>
      <Navbar />
      <section className="search-top">
        <div className="search-heading">
          <div className="search-heading-greetings">
            <h1>Welcome To Nepal Nishan</h1>
            <p>
              Find highly experienced and knowledgeable guides at standard
              affordable rates.
            </p>
          </div>
          <div className="search-heading-image">
            <img src="https://img.freepik.com/free-vector/flat-tourists-ready-holiday_23-2149059980.jpg?w=1480&t=st=1674374801~exp=1674375401~hmac=a38066fa1b72bd8df5254f5802762754af8c7b53b23903ec06412691cfbd6fea" />
          </div>
        </div>
      </section>
      <div className="search-content">
        <div className="search-content-sidebar">
          <div className="search-content-sidebar-location">
            <label>Preffered Location: </label>
            <select name="location" id="location">
              <option value="Pimbahal">Pimbahal</option>
              <option value="Bag Bhairab">Bag Bhairab</option>
              <option value="Bauddha">Bauddha</option>
              <option value="Siddhapokhari">Siddhapokhari</option>
            </select>
          </div>
        </div>
        <div class="search-display-guides">
          <div class="search-display-guides-title">
            <h1>Available Guides</h1>
          </div>
          <div class="search-display-guides-card"></div>
        </div>
      </div>
    </>
  );
}

export default SearchGuide;
