import React from "react";
import { Flex, FlexColumn, Text, Link } from "@/styles/styles";
import { useTranslation } from "next-i18next";
import { colors } from "@/styles/colors";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="52.5rem"
      padding="0.5rem 0"
      responsiveFull
    >
      <Link href="https://www.isbank.com.tr/" margin="0 0 0 1.563rem ">
        <img src="/assets/isbank_logo.png" alt="isbank_logo" />
      </Link>

      <FlexColumn
        alignItems="center"
        padding="1rem 0 0 0 0"
        gap="0.188rem"
        margin="0 1.563rem 0  0"
      >
        <img src="/assets/lock.png" alt="lockIcon" />
        <Text color={colors.specialBlue} fontSize="10.063rem" fontWeight="500">
          {t("Secure")}
        </Text>
      </FlexColumn>
    </Flex>
  );
};

export default Navbar;
