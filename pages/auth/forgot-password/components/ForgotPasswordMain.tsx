import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import InputBireysel from "./InputBireysel";
import InputTicari from "./InputTicari";
import { FlexColumn } from "@/styles/styles";
import { useTab } from "../context/TabContext";

const ForgotPasswordMain: React.FC = () => {
  const { tab } = useTab();
  return (
    <FlexColumn
      width="788px"
      padding="20px"
      backgroundColor="#fff"
      responsiveFull
    >
      <Header />
      <Tabs />
      {tab === "bireysel" ? <InputBireysel /> : <InputTicari />}
    </FlexColumn>
  );
};

export default ForgotPasswordMain;
