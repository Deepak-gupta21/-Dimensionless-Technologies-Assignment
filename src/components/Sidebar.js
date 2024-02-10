
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { AccountBalance, InsertChart, Score, Notifications, Support } from "@mui/icons-material";
import Logo from "../logo.png"

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      style={{ width: "18rem", boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Logo at the top of the sidebar */}
      <img
        src={Logo}
        alt="Your Logo"
        style={{ width: "60%", marginBottom: "10px", marginLeft:'1em', marginTop:'1em'}}
      />

      
  
        <h1 style={{ color: 'rgba(0, 0, 0, 0.5)', paddingLeft: '1.9em', fontSize: '0.8em' }}>Main Menu</h1>

      <List>
        <ListItem button>
        <IconButton>
            <AccountBalance />
          </IconButton>
          <ListItemText primary="News Quant" />
        </ListItem>
        <ListItem button>
        <IconButton>
            <InsertChart />
          </IconButton>
          <ListItemText primary="Real Economics Indicators" />
        </ListItem>
        <ListItem button>
        <IconButton>
            <Score />
          </IconButton>
          <ListItemText primary="One Score" />
        </ListItem>
        <ListItem button>       
        <IconButton>
            <Notifications />
          </IconButton>
          <ListItemText primary="Alert Central" />
        </ListItem>
        <ListItem button>
        <IconButton>
            <Support />
          </IconButton>
          <ListItemText primary="Customer Support" />
        </ListItem>
     
      </List>
    </Drawer>
  );
};

export default Sidebar;
