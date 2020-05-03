import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { useSelector } from "react-redux";

export default function Loading() {
  
  const loading = useSelector(state => state.request.loading)
  
  return (
    <>
    {loading ? 
    <div className="sweet-loading">
      <ClipLoader
        css={`position: absolute; top: 50%; left: 50%; margin-left: -27.5px; display: block;`}        
        size={50}
        loading={true}
      />
    </div>
    :
    ''
    }
    </>    
  );
}