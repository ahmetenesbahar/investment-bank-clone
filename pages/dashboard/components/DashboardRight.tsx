import React from "react";
import Calendar from "./Calendar";
import { Flex, Icon, Text, Button, FullBorderFlex } from "@/styles/styles";

const DashboardRight: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      borderBottom="1px solid #e5e5e5 "
      justifyContent="center"
      alignItems="center"
    >
      <Calendar />
      <Flex padding="0 12px 6px 12px" width="100%">
        <FullBorderFlex
          justifyContent="center"
          alignItems="center"
          border="1px solid #C1C9D3"
          padding="10px 20px "
          gap="10px"
          width="100%"
          cursor="pointer"
        >
          <Icon src="/assets/plus_blue.png" />
          <Button backgroundColor="#fff" padding="0">
            <Text
              fontSize="14px"
              fontWeight="600"
              color="#69a6e1"
              cursor="pointer"
            >
              Yeni Not Ekle
            </Text>
          </Button>
        </FullBorderFlex>
      </Flex>
    </Flex>
  );
};

export default DashboardRight;
