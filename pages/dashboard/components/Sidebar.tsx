import React, { useState } from "react";
import { Flex, Text, Icon, DashboardSidebarContainer } from "@/styles/styles";
import useMediaQuery from "@/hooks/useMediaQuery";
import SearchBar from "./SearchBar";
import { usePage } from "../context/PageContext";
import useUser from "@/hooks/useGetUser";
import { useTranslation } from "next-i18next";
import { getSidebarItems, getSmallSidebarItems } from "../utils/sidebarItems";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const { menu } = usePage();
  const user = useUser();
  const width = useMediaQuery();
  const today = new Date();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const sidebarItems = getSidebarItems(t);
  const smallSidebarItems = getSmallSidebarItems(t);
  const itemsToRender = width < 1024 ? smallSidebarItems : sidebarItems;

  const formatDateTime = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  if (!menu && width < 1024) {
    return null;
  }

  return (
    <DashboardSidebarContainer
      height=" 100% "
      backgroundColor={width <= 1280 ? "#1C345C" : "#08335e"}
      flexDirection="column"
      zIndex="2"
      position="fixed"
      top="44px"
    >
      {width < 1280 && (
        <Flex
          width="100%"
          position="sticky"
          zIndex="100"
          top="0"
          backgroundColor="#08335e"
        >
          <SearchBar />
        </Flex>
      )}
      {itemsToRender.map((item, index) => (
        <Flex
          key={index}
          padding="8px 10px"
          gap="20px"
          borderBottom={
            width <= 1280 ? "1px solid #10213c" : "1px solid #072E54"
          }
          justifyContent="start"
          alignItems="center"
          cursor="pointer"
          position="relative"
          width="100%"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          backgroundColor={activeIndex === index ? "#072E54" : "transparent"}
        >
          <Icon src={activeIndex === index ? item.hoveredIcon : item.icon} />
          <Text color="#fff" fontWeight="400" cursor="pointer">
            {item.label}
          </Text>
          {item.arrow && (
            <Icon src={item.arrow} position="absolute" right="20px" />
          )}
        </Flex>
      ))}

      {width < 1024 && (
        <>
          <Flex
            backgroundColor="#fff"
            width="100%"
            flexDirection="column"
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          >
            <Flex gap="3px" width="100%">
              <Flex>
                <Icon
                  width="44px"
                  height="44px"
                  src="/assets/DefaultProfilePic.jpg"
                />
              </Flex>
              <Flex
                height="100%"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  height="100%"
                >
                  <Text
                    color="#024487"
                    fontWeight="700"
                    cursor="pointer"
                  >{`${user?.firstName} ${user?.lastName}`}</Text>
                  <Text
                    color="#024487"
                    fontWeight="500"
                    fontSize="12px"
                    cursor="pointer"
                  >{`${t("Last Login")} : ${formatDateTime(today)}`}</Text>
                </Flex>
                <Icon
                  src="/assets/lower_arrow_dark_blue.png"
                  transform={activeMenu ? "rotate(180deg)" : "rotate(0deg)"}
                />
              </Flex>
            </Flex>
            {activeMenu && (
              <>
                <Flex
                  backgroundColor="#F2F9FF"
                  width="100%"
                  padding="10px"
                  cursor="pointer "
                >
                  <Text fontWeight="400" color="#024487" cursor="pointer ">
                    {t("Upload Photo")}
                  </Text>
                </Flex>
                <Flex
                  backgroundColor="#F2F9FF"
                  width="100%"
                  borderBottom="5px solid #024487"
                  padding="10px"
                  justifyContent="space-between"
                  cursor="pointer"
                >
                  <Text fontWeight="400" color="#024487" cursor="pointer">
                    {t("Update Your Profile")}
                  </Text>
                  <Text cursor="pointer " color="#024487">
                    100%
                  </Text>
                </Flex>
              </>
            )}
          </Flex>
          <Flex
            backgroundColor="#F2F9FF"
            width="100%"
            alignItems="center"
            margin="0 0 44px 0"
          >
            <Icon src="/assets/header_logout.png" />
            <Text fontWeight="500" cursor="pointer" color="#08335e">
              {t("logout")}
            </Text>
          </Flex>
        </>
      )}
    </DashboardSidebarContainer>
  );
};

export default Sidebar;
