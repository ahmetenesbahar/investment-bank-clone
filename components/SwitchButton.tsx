import React from "react";
import {
  SwitchContainer,
  SwitchInput,
  SwitchSlider,
  SwitchLabel,
  SwitchLabelLeft,
} from "@/styles/styles";

interface SwitchButtonProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ checked, onChange }) => {
  return (
    <SwitchContainer>
      <SwitchInput type="checkbox" checked={checked} onChange={onChange} />
      <SwitchSlider checked={checked} />
      <SwitchLabel checked={checked}>Hatırla</SwitchLabel>
      <SwitchLabelLeft checked={!checked}>Hatırla</SwitchLabelLeft>
    </SwitchContainer>
  );
};

export default SwitchButton;
