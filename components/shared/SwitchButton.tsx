import React from "react";
import { SwitchContainer, SwitchInput, SwitchSlider } from "@/styles/styles";

interface SwitchButtonProps {
  checked: boolean;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ checked }) => {
  return (
    <SwitchContainer>
      <SwitchInput type="checkbox" checked={checked} />
      <SwitchSlider checked={checked} />
    </SwitchContainer>
  );
};

export default SwitchButton;
