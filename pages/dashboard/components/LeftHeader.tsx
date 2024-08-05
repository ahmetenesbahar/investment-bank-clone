import React, { useState } from "react";
import {
  Flex,
  Text,
  VerticalLine,
  Button,
  Icon,
  FullBorderFlex,
} from "@/styles/styles";
import { useTab } from "../context/TabContext";
import { useTranslation } from "next-i18next";
import { usePage } from "../context/PageContext";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";

const initialTabs = ["hesaplarım", "kredi kartım"];

const LeftHeader: React.FC = () => {
  const { tab, handleTabChange } = useTab();
  const { page } = usePage();
  const { t } = useTranslation();
  const [tabs, setTabs] = useState(initialTabs);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    if (source.index === destination.index) {
      return;
    }

    const updatedTabs = Array.from(tabs);
    const [movedTab] = updatedTabs.splice(source.index, 1);
    updatedTabs.splice(destination.index, 0, movedTab);

    setTabs(updatedTabs);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex
        alignItems="center"
        width="100%"
        borderBottom="1px solid #e5e5e5"
        padding="10px 0 0 0"
        justifyContent="space-between"
      >
        <Droppable droppableId="tabs" direction="horizontal">
          {(provided: any) => (
            <Flex
              ref={provided.innerRef}
              {...provided.droppableProps}
              alignItems="center"
              justifyContent="space-between"
            >
              {tabs.map((tabId, index) => (
                <Draggable key={tabId} draggableId={tabId} index={index}>
                  {(provided: any) => (
                    <Flex
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      padding="1rem"
                      width="170px"
                      cursor="grab"
                      justifyContent="space-between"
                      alignItems="center"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      borderBottom={
                        tab === tabId ? "2px solid #1c345c" : "none"
                      }
                      onClick={() => handleTabChange(tabId)}
                    >
                      <Text
                        cursor="grab"
                        color={tab === tabId ? "#1c345c" : "#555555"}
                        fontWeight={tab === tabId ? "700" : "400"}
                      >
                        {tabId === "hesaplarım"
                          ? "Hesaplarım"
                          : "Kredi Kartlarım"}
                      </Text>
                      {hoveredIndex === index && (
                        <Icon src="/assets/tab_drag.png" cursor="grab" />
                      )}
                    </Flex>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <VerticalLine height="26px" />
            </Flex>
          )}
        </Droppable>
        {page !== "editAccounts" && (
          <Flex padding="0 0 6px 0">
            <FullBorderFlex
              justifyContent="center"
              alignItems="center"
              border="1px solid #C1C9D3"
              padding="10px "
              gap="10px"
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
                  Vadeli Hesap Aç
                </Text>
              </Button>
            </FullBorderFlex>
          </Flex>
        )}
      </Flex>
    </DragDropContext>
  );
};

export default LeftHeader;
