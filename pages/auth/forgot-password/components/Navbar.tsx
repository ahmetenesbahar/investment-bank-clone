import React from "react";
import { Flex, FlexColumn, Text } from "@/styles/styles";

const Navbar: React.FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="840px"
      padding="0.5rem 0"
    >
      <a href="https://www.isbank.com.tr/">
        <img src="/assets/isbank_logo.png" alt="" />
      </a>

      <FlexColumn
        alignItems="center"
        padding="1rem 0 0 0 0"
        gap="3px"
        margin="0 50px 0  0"
      >
        <img src="/assets/lock.png" alt="" />
        <Text color="#00428a" fontSize="11px" fontWeight="500">
          Güvenli
        </Text>
      </FlexColumn>
    </Flex>
  );
};

export default Navbar;
