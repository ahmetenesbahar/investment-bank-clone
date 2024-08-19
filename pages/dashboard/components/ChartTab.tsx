import React, { useState } from "react";
import { Flex, ChartDiv, Text, Button, VerticalLine } from "@/styles/styles";
import Chart from "./Chart";
import useUser from "@/hooks/useGetUser";
import useCurrency from "../hooks/useCurrency";
import { usePage } from "../../../context/PageContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";

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
      value: user?.debts,
    },
  ];

  return (
    <Flex
      flexDirection="column"
      width="100%"
      padding="0.938rem"
      position="relative"
    >
      {width >= breakpoints.md ? (
        <>
          <Text fontWeight="700" color={colors.secondaryBlue}>
            {t("Financial Status")}
          </Text>
          <ChartDiv width="90%">
            <Chart
              labels={data.map((item) => item.label)}
              backgroundColor={[colors.specialBlue]}
              data={data}
              chartText={t("My Assets")}
            />
            <Chart
              labels={data.map((item) => item.label)}
              backgroundColor={[`${colors.brown}`]}
              chartText={t("My Debts")}
              data={cardData}
            />
          </ChartDiv>
        </>
      ) : (
        <>
          <Flex
            width="100%"
            borderBottom={`0.063rem solid ${colors.borderColor}`}
            alignItems="center"
          >
            <Flex
              borderBottom={
                tab === 0 ? `0.125rem solid ${colors.secondaryBlue}` : ""
              }
              padding="1rem"
              onClick={() => setTab(0)}
            >
              <Text
                cursor="grab"
                color={
                  tab === 0 ? `${colors.secondaryBlue}` : `${colors.grayText}`
                }
                fontWeight={tab === 0 ? "700" : "400"}
              >
                {t("My Assets")}
              </Text>
            </Flex>
            <VerticalLine height="1.625rem" />
            <Flex
              borderBottom={
                tab === 1 ? `0.125rem solid ${colors.secondaryBlue}` : ""
              }
              padding="1rem"
              onClick={() => setTab(1)}
            >
              <Text
                cursor="grab"
                color={
                  tab === 1 ? `${colors.secondaryBlue}` : `${colors.grayText}`
                }
                fontWeight={tab === 1 ? "700" : "400"}
              >
                {t("My Debts")}
              </Text>
            </Flex>
            <VerticalLine height="1.625rem" />
          </Flex>
          <ChartDiv width="90%">
            {tab === 0 ? (
              <Chart
                labels={data.map((item) => item.label)}
                backgroundColor={[colors.specialBlue]}
                data={data}
                chartText={t("My Assets")}
              />
            ) : (
              <Chart
                labels={data.map((item) => item.label)}
                backgroundColor={[`${colors.brown}`]}
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
        borderBottom={
          width >= breakpoints.lg ? `0.063rem solid ${colors.borderColor}` : ""
        }
        padding="0.625rem 0.313rem"
      >
        <Text
          textDecoration="underline"
          cursor="pointer"
          color={colors.textBlue}
          onClick={() => {
            handleHideNumbers();
          }}
        >
          {hideNumbers ? `${t("Hide Ammount")}` : `${t("Show Ammount")}`}
        </Text>
        <Button
          border={`0.063rem solid  ${colors.borderColor}`}
          backgroundColor="transparent"
          padding="0.6rem 1rem"
        >
          <Text color={colors.textBlue} cursor="pointer" textAlign="center">
            {t("Financial Status Details")}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChartTab;
