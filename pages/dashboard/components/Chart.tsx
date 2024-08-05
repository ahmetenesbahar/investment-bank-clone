import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Flex, VerticalLine } from "@/styles/styles";

interface ChartProps {
  labels: string[];
  backgroundColor: string[];
  data: { label: string; value: number }[];
}

const Chart: React.FC<ChartProps> = ({ labels, backgroundColor, data }) => {
  return (
    <Flex width="100%" position="relative">
      <Flex
        backgroundColor="#fff"
        width="4px"
        height="20px"
        position="absolute"
        left="150px"
        top="10%"
        zIndex="999"
      />
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 80,
            data,
          },
        ]}
        width={400}
        height={200}
        slotProps={{
          legend: { itemMarkHeight: 12, itemMarkWidth: 12 },
        }}
      />
    </Flex>
  );
};

export default Chart;
