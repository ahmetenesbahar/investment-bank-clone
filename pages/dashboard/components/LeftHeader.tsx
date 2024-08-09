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
import useMediaQuery from "@/hooks/useMediaQuery";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";

enum TabEnum {
  MyAccounts = "myAccounts",
  MyCreditCards = "myCreditCards",
}

const LeftHeader: React.FC = () => {
  const { tab, handleTabChange } = useTab();
  const width = useMediaQuery();
  const { page } = usePage();
  const { t } = useTranslation();
  const [tabs, setTabs] = useState<TabEnum[]>([
    TabEnum.MyAccounts,
    TabEnum.MyCreditCards,
  ]);

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
        borderBottom={`0.063rem solid ${colors.borderColor}`}
        padding={
          width >= breakpoints.md
            ? "0.625rem 1.25rem 0 0"
            : "0 0.625rem 0 0.625rem"
        }
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
                      width={width <= breakpoints.md ? "auto" : "10.625rem"}
                      cursor="grab"
                      justifyContent="space-between"
                      alignItems="center"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      borderBottom={
                        tab === tabId
                          ? `0.125rem solid ${colors.secondaryBlue}`
                          : "none"
                      }
                      onClick={() => handleTabChange(tabId)}
                    >
                      <Text
                        cursor="grab"
                        color={
                          tab === tabId
                            ? `${colors.secondaryBlue}`
                            : `${colors.grayText}`
                        }
                        fontWeight={tab === tabId ? "700" : "400"}
                      >
                        {tabId === "myAccounts"
                          ? `${t("My Accounts")}`
                          : `${t("My Credit Cards")}`}
                      </Text>
                      {hoveredIndex === index && (
                        <Icon
                          src="/assets/tab_drag.png"
                          cursor="grab"
                          alt="grapIcon"
                        />
                      )}
                    </Flex>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <VerticalLine height="1.625rem" />
            </Flex>
          )}
        </Droppable>
        {page !== "editAccounts" &&
          (width >= breakpoints.md ? (
            <Flex padding="0 0 0.375rem 0">
              <FullBorderFlex
                justifyContent="center"
                alignItems="center"
                border={`0.063rem solid  ${colors.borderColor}`}
                padding="0.625rem "
                gap="0.625rem"
                cursor="pointer"
              >
                <Icon src="/assets/plus_blue.png" alt="plusIcon" />
                <Button backgroundColor={colors.white} padding="0">
                  <Text
                    fontSize="0.875rem"
                    fontWeight="600"
                    color={colors.textBlue}
                    cursor="pointer"
                  >
                    {tab === "myAccounts"
                      ? `${t("Open Time Deposit")}`
                      : `${t("Apply For Credit Card")}`}
                  </Text>
                </Button>
              </FullBorderFlex>
            </Flex>
          ) : (
            <Flex
              backgroundColor={colors.borderBlue}
              padding="0.625rem 1.025rem"
            >
              <Icon
                src="/assets/white_plus_icon.png"
                alt="plusIcon"
                width="0.938rem"
              />
            </Flex>
          ))}
      </Flex>
    </DragDropContext>
  );
};

export default LeftHeader;
