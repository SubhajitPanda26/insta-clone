import React from "react";
import "../../styles/sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import MovieIcon from "@mui/icons-material/Movie";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxIcon from "@mui/icons-material/AddBox";

const SideBar = () => {
  return (
    <div className="sidebarContainer">
      <ul style={{ margin: "0px", width: "15vw" }}>
        <li style={{ marginBottom: "20px" }}>
          <img
            width="120px"
            src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
          />
        </li>
        <li className="element">
          <HomeIcon />
          Home
        </li>
        <li className="element">
          <SearchIcon />
          Search
        </li>
        <li className="element">
          <ExploreIcon />
          Explore
        </li>
        <li className="element">
          <MovieIcon />
          Reels
        </li>
        <li className="element">
          <MapsUgcIcon />
          Messages
        </li>
        <li className="element">
          <FavoriteBorderIcon />
          Notifications
        </li>
        <li className="element">
          <AddBoxIcon />
          Create
        </li>
        <li className="element">
          <img
            width="20px"
            src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
            alt=""
          />
          Profile
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
