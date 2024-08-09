import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Flex, Text } from "@/styles/styles";
import { usePage } from "../context/PageContext";
import { colors } from "@/styles/colors";

interface ChartProps {
  labels: string[];
  backgroundColor: string[];
  data: { label: string; value: number }[];
  chartText?: string;
}

const Chart: React.FC<ChartProps> = ({ backgroundColor, data, chartText }) => {
  const { hideNumbers } = usePage();

  const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);
  const chartLabels = data.map((item) => item.label);
  const isValueZero = totalValue === 0;
  const newData = isValueZero
    ? [{ ...data[0], value: 0.1 }, ...data.slice(1)]
    : data;

  return (
    <Flex margin="0px  0 0 -3.75rem">
      <Flex
        width="100%"
        position="relative"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          backgroundColor={colors.white}
          width="0.25rem"
          height="1.25rem"
          position="absolute"
          left="9.375rem"
          top="10%"
          zIndex="999"
        />
        <Flex
          flexDirection="column"
          position="absolute"
          left="7.5rem"
          top="38%"
          justifyContent="center"
          alignItems="center"
        >
          <Text color={colors.black} fontWeight="500" fontSize="0.75rem">
            {chartText}
          </Text>
          <Text fontWeight="700" color={colors.black} fontSize="1rem">
            {!hideNumbers && totalValue}
          </Text>
          <Text textAlign="center" color={colors.black} fontWeight="500">
            {!hideNumbers && "TL"}
          </Text>
        </Flex>
        <PieChart
          series={[
            {
              paddingAngle: 5,
              innerRadius: 60,
              outerRadius: 80,
              data: isValueZero ? newData : data,
            },
          ]}
          width={400}
          height={200}
          slotProps={{
            legend: { hidden: true },
          }}
          colors={isValueZero ? [`${colors.zeroValue}`] : backgroundColor}
          tooltip={{}}
        />

        <Flex
          position="absolute"
          right="3.125rem"
          top="1.25rem"
          flexDirection="column"
        >
          <Flex gap="0.313rem" justifyContent="center" alignItems="center">
            <Flex
              backgroundColor={backgroundColor[0]}
              width="1rem"
              height="1rem"
              borderRadius="0.313rem"
            ></Flex>
            <Text>{chartLabels}</Text>
          </Flex>
          <Flex width="100%" alignItems="center" justifyContent="center">
            <Text fontWeight="700" color={colors.black} fontSize="0.875rem">
              {!hideNumbers && `${totalValue} TL`}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Chart;
