import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import InputBireysel from "./InputBireysel";
import InputTicari from "./InputTicari";
import { FlexColumn } from "@/styles/styles";
import { useTab } from "../context/TabContext";
import { colors } from "@/styles/colors";

const ForgotPasswordMain: React.FC = () => {
  const { tab } = useTab();
  return (
    <FlexColumn
      width="49.25rem"
      padding="1.25rem"
      backgroundColor={colors.white}
      responsiveFull
    >
      <Header />
      <Tabs />
      {tab === "bireysel" ? <InputBireysel /> : <InputTicari />}
    </FlexColumn>
  );
};

export default ForgotPasswordMain;
