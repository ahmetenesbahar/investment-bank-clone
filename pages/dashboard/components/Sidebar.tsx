import React, { useState } from "react";
import { Flex, Text, Icon, DashboardSidebarContainer } from "@/styles/styles";
import useMediaQuery from "@/hooks/useMediaQuery";
import SearchBar from "./SearchBar";
import { usePage } from "../context/PageContext";
import useUser from "@/hooks/useGetUser";
import { useTranslation } from "next-i18next";
import { getSidebarItems, getSmallSidebarItems } from "../utils/sidebarItems";
import { formatDateTime } from "../utils/formatting";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";

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
  const itemsToRender =
    width < breakpoints.lg ? smallSidebarItems : sidebarItems;

  if (!menu && width < breakpoints.lg) {
    return null;
  }

  return (
    <DashboardSidebarContainer
      height=" 100% "
      backgroundColor={
        width <= breakpoints.xl
          ? `${colors.secondaryBlue}`
          : `${colors.loginHeaderBlue}`
      }
      flexDirection="column"
      zIndex="2"
      position="fixed"
      top="44px"
    >
      {width < breakpoints.xl && (
        <Flex
          width="100%"
          position="sticky"
          zIndex="100"
          top="0"
          backgroundColor={colors.loginHeaderBlue}
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
            width <= breakpoints.xl
              ? `1px solid ${colors.darkBlue}`
              : `1px solid ${colors.secondaryDarkBlue}`
          }
          justifyContent="start"
          alignItems="center"
          cursor="pointer"
          position="relative"
          width="100%"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          backgroundColor={
            activeIndex === index
              ? `${colors.secondaryDarkBlue}`
              : "transparent"
          }
        >
          <Icon
            src={activeIndex === index ? item.hoveredIcon : item.icon}
            alt="sidebarIcon"
          />
          <Text color={colors.white} fontWeight="400" cursor="pointer">
            {item.label}
          </Text>
          {item.arrow && (
            <Icon src={item.arrow} position="absolute" right="20px" />
          )}
        </Flex>
      ))}

      {width < breakpoints.lg && (
        <>
          <Flex
            backgroundColor={colors.white}
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
                  alt="profilePic"
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
                    color={colors.secondaryBlue}
                    fontWeight="700"
                    cursor="pointer"
                  >{`${user?.firstName} ${user?.lastName}`}</Text>
                  <Text
                    color={colors.secondaryBlue}
                    fontWeight="500"
                    fontSize="12px"
                    cursor="pointer"
                  >{`${t("Last Login")} : ${formatDateTime(today)}`}</Text>
                </Flex>
                <Icon
                  src="/assets/lower_arrow_dark_blue.png"
                  alt="lowerArrow"
                  transform={activeMenu ? "rotate(180deg)" : "rotate(0deg)"}
                />
              </Flex>
            </Flex>
            {activeMenu && (
              <>
                <Flex
                  backgroundColor={colors.hoverWhite}
                  width="100%"
                  padding="10px"
                  cursor="pointer "
                >
                  <Text
                    fontWeight="400"
                    color={colors.secondaryBlue}
                    cursor="pointer "
                  >
                    {t("Upload Photo")}
                  </Text>
                </Flex>
                <Flex
                  backgroundColor={colors.hoverWhite}
                  width="100%"
                  borderBottom={`5px solid ${colors.secondaryBlue}`}
                  padding="10px"
                  justifyContent="space-between"
                  cursor="pointer"
                >
                  <Text
                    fontWeight="400"
                    color={colors.secondaryBlue}
                    cursor="pointer"
                  >
                    {t("Update Your Profile")}
                  </Text>
                  <Text cursor="pointer " color={colors.secondaryBlue}>
                    100%
                  </Text>
                </Flex>
              </>
            )}
          </Flex>
          <Flex
            backgroundColor={colors.hoverWhite}
            width="100%"
            alignItems="center"
            margin="0 0 44px 0"
          >
            <Icon src="/assets/header_logout.png" alt="logoutIcon" />
            <Text
              fontWeight="500"
              cursor="pointer"
              color={colors.loginHeaderBlue}
            >
              {t("logout")}
            </Text>
          </Flex>
        </>
      )}
    </DashboardSidebarContainer>
  );
};

export default Sidebar;
