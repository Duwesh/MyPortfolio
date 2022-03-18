import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <span style={{ color: "red", fontWeight: "bold" }}></span>
      <Typewriter
        options={{
          strings: [
            "A MERN Stack Developer ⚛️",
            "I like to convert ideas into code 🐱‍👤💻",
            "I enjoy solving problems 🦸‍♂️",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};
