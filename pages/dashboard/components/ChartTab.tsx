import React from "react";
import { Flex, Text, Button } from "@/styles/styles";
import Chart from "./Chart";
import useUser from "@/hooks/useGetUser";
import useCurrency from "../hooks/useCurrency";
import { usePage } from "../context/PageContext";

const ChartTab: React.FC = () => {
  const user = useUser();
  const currency = useCurrency(user);
  const { handleHideNumbers, hideNumbers } = usePage();

  const data = [
    {
      label: "Vadesiz Hesap",
      value: currency,
    },
  ];

  const cardData = [
    {
      label: "Kredi Kartı",
      value: 0,
    },
  ];

  return (
    <Flex
      flexDirection="column"
      width="100%"
      padding="15px"
      position="relative"
    >
      <Text fontWeight="700" color="#1c345c">
        Finansal Durumum
      </Text>
      <Flex>
        <Chart
          labels={data.map((item) => item.label)}
          backgroundColor={["#49A5E0"]}
          data={data}
          chartText="Varlıklarım"
        />
        <Chart
          labels={data.map((item) => item.label)}
          backgroundColor={["#B23508"]}
          chartText="Borçlarım"
          data={cardData}
        />
      </Flex>

      <Flex
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #e5e5e5 "
        padding="10px 5px"
      >
        <Text
          textDecoration="underline"
          cursor="pointer"
          color="#69a6e1"
          onClick={() => {
            handleHideNumbers();
          }}
        >
          Sayıları {hideNumbers ? "Göster" : "Gizle"}
        </Text>
        <Button
          border="1px solid #C1C9D3"
          backgroundColor="transparent"
          padding="0.6rem 1rem"
        >
          <Text color="#69a6e1" cursor="pointer" textAlign="center">
            Finansal Durum Detayı
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChartTab;
