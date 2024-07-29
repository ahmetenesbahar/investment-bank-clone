import React from "react";
import {
  SwitchContainer,
  SwitchInput,
  SwitchSlider,
  SwitchLabel,
  SwitchLabelLeft,
} from "@/styles/styles";
import { useTranslation } from "next-i18next";

interface SwitchButtonProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ checked, onChange }) => {
  const { t } = useTranslation("common");
  const isEnglishText = t("Remember").length > 7;

  return (
    <SwitchContainer>
      <SwitchInput type="checkbox" checked={checked} onChange={onChange} />
      <SwitchSlider checked={checked} />
      <SwitchLabel checked={checked} isEnglish={isEnglishText}>
        {t("Remember")}
      </SwitchLabel>
      <SwitchLabelLeft checked={!checked} isEnglish={isEnglishText}>
        {t("Remember")}
      </SwitchLabelLeft>
    </SwitchContainer>
  );
};

export default SwitchButton;
