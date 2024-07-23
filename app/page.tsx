"use client";

import React from "react";
import { StyledButton } from "@/styles/styles";

const Home: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <StyledButton onClick={handleClick}>Click Me</StyledButton>
    </div>
  );
};

export default Home;
