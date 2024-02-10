// components/Header.js
// import React from 'react';
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@material-ui/icons/Mic";

import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isSearchClick, setSearchClick] = useState(false);

  const handleMicClick = () => {
    //logic to start/stop voice recording
    setIsRecording((prev) => !prev);
  };
  const handleSearch = () => {
    //logic to start/stop voice recording
    setSearchClick((prev) => !prev);
  };
  return (
    <AppBar position="static" style={{ background: "#fff" }}>
      <Toolbar>
        
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "85%",
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "white",
                borderRadius: "4px",
                border: "1px solid #888",
              }}
            >
              <SearchIcon style={{ margin: "0 8px", 
            //   color: "#888",
             color: isSearchClick ? "blue" : "#888", 
            }} 
            onClick={handleSearch}
             />
              <InputBase
                placeholder="Search your question here or ask TILA"
                inputProps={{ "aria-label": "search" }}
                style={{ padding: "8px", width: "100%", border: "none" }}
              />

              <MicIcon
                style={{
                  margin: "0 8px",
                  color: isRecording ? "red" : "#888", 
                  cursor: "pointer",
                }}
                onClick={handleMicClick}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "2em",
              marginRight: "0em",
              color: "white",
              
            }}
          >
            <NotificationsIcon style={{ marginRight: "10px", color: "#ccc" }} />

            <div
              style={{
                
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                overflow: "hidden",
                marginRight: "10px",
              }}
            >
              <img
                src="https://i.pinimg.com/564x/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.jpg"
                alt="User"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* User name */}
            <div style={{ marginRight: "10px", color: "#000" }}>
             
              Username
            </div>

            {/* Drop-down icon */}
            <ExpandMoreIcon style={{ color: "#ccc" }} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
