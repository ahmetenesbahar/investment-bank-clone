import React, { useState } from "react";
import { Flex, ChartDiv, Text, Button, VerticalLine } from "@/styles/styles";
import Chart from "./Chart";
import useUser from "@/hooks/useGetUser";
import useCurrency from "../hooks/useCurrency";
import { usePage } from "../context/PageContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";

const ChartTab: React.FC = () => {
  const { t } = useTranslation();
  const width = useMediaQuery();
  const user = useUser();
  const currency = useCurrency(user);
  const { handleHideNumbers, hideNumbers } = usePage();
  const [tab, setTab] = useState(0);

  const data = [
    {
      label: `${t("Current Account")}`,
      value: currency,
    },
  ];

  const cardData = [
    {
      label: `${t("Credit Card")}`,
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
      {width >= 768 ? (
        <>
          <Text fontWeight="700" color="#1c345c">
            {t("Financial Status")}
          </Text>
          <ChartDiv width="90%">
            <Chart
              labels={data.map((item) => item.label)}
              backgroundColor={["#49A5E0"]}
              data={data}
              chartText={t("My Assets")}
            />
            <Chart
              labels={data.map((item) => item.label)}
              backgroundColor={["#B23508"]}
              chartText={t("My Debts")}
              data={cardData}
            />
          </ChartDiv>
        </>
      ) : (
        <>
          <Flex
            width="100%"
            borderBottom="1px solid #e5e5e5"
            alignItems="center"
          >
            <Flex
              borderBottom={tab === 0 ? "2px solid #1c345c" : ""}
              padding="1rem"
              onClick={() => setTab(0)}
            >
              <Text
                cursor="grab"
                color={tab === 0 ? "#1c345c" : "#555555"}
                fontWeight={tab === 0 ? "700" : "400"}
              >
                {t("My Assets")}
              </Text>
            </Flex>
            <VerticalLine height="26px" />
            <Flex
              borderBottom={tab === 1 ? "2px solid #1c345c" : ""}
              padding="1rem"
              onClick={() => setTab(1)}
            >
              <Text
                cursor="grab"
                color={tab === 1 ? "#1c345c" : "#555555"}
                fontWeight={tab === 1 ? "700" : "400"}
              >
                {t("My Debts")}
              </Text>
            </Flex>
            <VerticalLine height="26px" />
          </Flex>
          <ChartDiv width="90%">
            {tab === 0 ? (
              <Chart
                labels={data.map((item) => item.label)}
                backgroundColor={["#49A5E0"]}
                data={data}
                chartText={t("My Assets")}
              />
            ) : (
              <Chart
                labels={data.map((item) => item.label)}
                backgroundColor={["#B23508"]}
                chartText={t("My Debts")}
                data={cardData}
              />
            )}
          </ChartDiv>
        </>
      )}

      <Flex
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={width >= 1024 ? "1px solid #e5e5e5" : ""}
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
          {hideNumbers ? `${t("Hide Ammount")}` : `${t("Show Ammount")}`}
        </Text>
        <Button
          border="1px solid #C1C9D3"
          backgroundColor="transparent"
          padding="0.6rem 1rem"
        >
          <Text color="#69a6e1" cursor="pointer" textAlign="center">
            {t("Financial Status Details")}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChartTab;
