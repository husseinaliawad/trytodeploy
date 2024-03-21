import React from "react";
import "./Sidenav.css";
import { Home, Search, Explore, AddBox, PlayCircleOutline, MailOutline, Notifications, AddCircleOutline } from "@mui/icons-material"; // Material UI Icons

const Sidenav = ({ active }) => {
  // Destructuring props for active state

  return (
    <div className="sidenav">
     <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div className="sidenav__buttons">
        <button
          className={`sidenav__button ${active === "home" ? "active" : ""}`}
        >
          <Home />
          <span>Home</span>
        </button>
        <button
          className={`sidenav__button ${active === "search" ? "active" : ""}`}
        >
          <Search />
          <span>Search</span>
        </button>
        <button
          className={`sidenav__button ${active === "explore" ? "active" : ""}`}
        >
          <Explore />
          <span>Explore</span>
        </button>
        <button
          className={`sidenav__button ${active === "reels" ? "active" : ""}`}
        >
          <PlayCircleOutline /> {/* Reels icon */}
          <span>Reels</span>
        </button>
        <button
          className={`sidenav__button ${active === "messages" ? "active" : ""}`}
        >
          <MailOutline /> {/* Messages icon */}
          <span>Messages</span>
        </button>
        <button
          className={`sidenav__button ${active === "notifications" ? "active" : ""}`}
        >
          <Notifications /> {/* Notifications icon */}
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutline /> {/* Create icon */}
          <span>Create</span>
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
