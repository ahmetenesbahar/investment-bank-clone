import React from "react";
import { Flex, Text } from "@/styles/styles";
import Chart from "./Chart";
import useUser from "@/hooks/useGetUser";
import useCurrency from "../hooks/useCurrency";

const ChartTab: React.FC = () => {
  const user = useUser();
  const currency = useCurrency(user);

  console.log(typeof currency);
  const data = [
    {
      label: "Vadesiz Hesap",
      value: currency,
    },
  ];
  const backgroundColor = ["#49A5E0"];

  return (
    <Flex flexDirection="column" width="100%">
      <Text fontWeight="700" color="#1c345c">
        Finansal Durumum
      </Text>
      <Flex>
        <Chart
          labels={data.map((item) => item.label)}
          backgroundColor={backgroundColor}
          data={data}
        />
        <Chart
          labels={data.map((item) => item.label)}
          backgroundColor={backgroundColor}
          data={data}
        />
      </Flex>
    </Flex>
  );
};

export default ChartTab;
