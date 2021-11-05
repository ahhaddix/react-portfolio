import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Hello! I am Amy Haddix and I have full stack certification from 
        Bottega University. I have previously worked for Amazon.com in device 
        diagnostics. 
        A little about me:
        I live in the Bluegrass state with my husband, Billy, and my three 
        children. We are an avid marching band family and love our Cincinnati
        Bengals! WhoDey!
      </div>
    </div>
  );
}