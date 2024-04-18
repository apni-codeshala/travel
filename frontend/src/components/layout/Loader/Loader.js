import React from "react";
// import "./Loader.css";
import walkingman from '../../../assets/walkingman.json'
import Lottie from "lottie-react"

const Loader = () => {
  const containerStyle = {
    width: '300px',
    marginLeft: '10%'
  };
  return (
    <div className="">
        <div style={containerStyle}>
          <Lottie loop={true} animationData={walkingman} />
        </div>
    </div>
  );
};

export default Loader;