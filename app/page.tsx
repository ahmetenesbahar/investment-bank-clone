"use client";
import React from "react";
import { NextPage } from "next";
import { StyledButton } from "@/styles/styles";

const Home: NextPage = () => {
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
