import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <span style={{ color: "red", fontWeight: "bold" }}></span>
      <Typewriter
        options={{
          strings: ["A Full Stack Web Developer", "A MERN Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};
