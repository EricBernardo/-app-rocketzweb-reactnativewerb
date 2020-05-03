import React from "react";
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
 
const useStyles = makeStyles(styles);

export default function Auth({children}) {
  
  const classes = useStyles();
  
  return (
    <div className={classes.wrapper}>      
      <div style={{
        margin: '0 auto',
        maxWidth: '500px',
        width: '90%',
        marginTop: '5%'
      }}>
        {children}
      </div>
    </div>
  );
}

Auth.propTypes = {
  children: PropTypes.element.isRequired
}
