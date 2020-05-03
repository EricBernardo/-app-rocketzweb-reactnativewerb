import { createGlobalStyle } from 'styled-components'

import "assets/css/material-dashboard-react.css?v=1.8.0";
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  .sweet-loading {
    width: 100%;
    height: 100%;
    top: 0px;
    background: #dedede;
    position: absolute;
    opacity: 0.6;
    z-index: 3;
  }
`;
