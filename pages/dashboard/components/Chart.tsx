import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Flex, VerticalLine, Text } from "@/styles/styles";
import { usePage } from "../context/PageContext";

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
    <Flex margin="0px  0 0 -60px">
      <Flex
        width="100%"
        position="relative"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          backgroundColor="#fff"
          width="4px"
          height="20px"
          position="absolute"
          left="150px"
          top="10%"
          zIndex="999"
        />
        <Flex
          flexDirection="column"
          position="absolute"
          left="120px"
          top="38%"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="#000" fontWeight="500" fontSize="12px">
            {chartText}
          </Text>
          <Text fontWeight="700" color="#000" fontSize="16px">
            {!hideNumbers && totalValue}
          </Text>
          <Text textAlign="center" color="#000" fontWeight="500">
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
          colors={isValueZero ? ["#E0E0E0"] : backgroundColor}
          tooltip={{}}
        />

        <Flex
          position="absolute"
          right="50px"
          top="20px"
          flexDirection="column"
        >
          <Flex gap="5px" justifyContent="center" alignItems="center">
            <Flex
              backgroundColor={backgroundColor[0]}
              width="16px"
              height="16px"
              borderRadius="5px"
            ></Flex>
            <Text>{chartLabels}</Text>
          </Flex>
          <Flex width="100%" alignItems="center" justifyContent="center">
            <Text fontWeight="700" color="#000" fontSize="14px">
              {!hideNumbers && `${totalValue} TL`}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Chart;
