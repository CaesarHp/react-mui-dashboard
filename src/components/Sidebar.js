import React, { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles } from "@material-ui/core/styles";

import HomeIcon from "@mui/icons-material/Home";
import PieChartIcon from "@mui/icons-material/PieChart";
import ViewListIcon from "@mui/icons-material/ViewList";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function Sidebar() {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const listChangeHandler = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => listChangeHandler(event, 0)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => listChangeHandler(event, 1)}
          >
            <ListItemIcon>
              <PieChartIcon />
            </ListItemIcon>
            <ListItemText primary="Analysis" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => listChangeHandler(event, 2)}
          >
            <ListItemIcon>
              <ViewListIcon />
            </ListItemIcon>
            <ListItemText primary="List" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => listChangeHandler(event, 3)}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
        </List>
      </div>
    </>
  );
}

export default Sidebar;
