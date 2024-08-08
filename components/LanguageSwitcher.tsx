import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { Text } from "@/styles/styles";
import { colors } from "@/styles/colors";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.replace(router.asPath, undefined, { locale: lng });
  };

  return (
    <div>
      <Text
        color={colors.specialBlue}
        cursor="pointer"
        onClick={() => changeLanguage(currentLanguage === "en" ? "tr" : "en")}
      >
        {currentLanguage === "en" ? "Türkçe" : "English"}
      </Text>
    </div>
  );
};

export default LanguageSwitcher;
