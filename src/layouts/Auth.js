import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import SignIn from "views/SignIn";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
 
const useStyles = makeStyles(styles);

export default function Admin() {
  
  const classes = useStyles();
  
  return (
    <div className={classes.wrapper}>      
      <div style={{
        margin: '0 auto',
        maxWidth: '500px',
        width: '90%',
        marginTop: '5%'
      }}>
        <SignIn />
      </div>
    </div>
  );
}
