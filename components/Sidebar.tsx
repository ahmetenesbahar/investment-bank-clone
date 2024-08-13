import React, { act, useEffect, useState } from "react";
import {
  Flex,
  Text,
  Icon,
  DashboardSidebarContainer,
  ActiveSidebarMenuContainer,
} from "@/styles/styles";
import useMediaQuery from "@/hooks/useMediaQuery";
import SearchBar from "../pages/dashboard/components/SearchBar";
import { usePage } from "../context/PageContext";
import { useSidebar } from "../context/SidebarContext";
import useUser from "@/hooks/useGetUser";
import { useTranslation } from "next-i18next";
import {
  getSidebarItems,
  getSmallSidebarItems,
  getSidebarSubItems,
} from "../pages/dashboard/utils/sidebarItems";
import { formatDateTime } from "../pages/dashboard/utils/formatting";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";
import { useRouter } from "next/router";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const { menu } = usePage();
  const router = useRouter();
  const user = useUser();
  const width = useMediaQuery();
  const today = new Date();
  const sidebarItems = getSidebarItems(t);
  const smallSidebarItems = getSmallSidebarItems(t);
  const sidebarSubItems = getSidebarSubItems(t);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const {
    activeTab,
    handleActiveTab,
    sidebarSubActive,
    handleSidebarSubActive,
  } = useSidebar();
  const [mouseEnter, setMouseEnter] = useState<boolean>(true);
  const [redirect, setRedirect] = useState<string | null>(null);
  const itemsToRender =
    width < breakpoints.lg ? smallSidebarItems : sidebarItems;

  useEffect(() => {
    console.log(activeTab);
  });

  useEffect(() => {
    if (redirect) {
      router.push(redirect);
      setRedirect(null);
    }
  }, [redirect, router]);

  const handleClick = (itemId: string) => {
    handleActiveTab(itemId);
    handleSidebarSubActive(itemId);
    if (itemId === "home") {
      setRedirect("dashboard");
    }
  };

  if (!menu && width < breakpoints.lg) {
    return null;
  }

  return (
    <Flex>
      <DashboardSidebarContainer
        height=" 100% "
        backgroundColor={
          width <= breakpoints.xl
            ? `${colors.secondaryBlue}`
            : `${colors.loginHeaderBlue}`
        }
        flexDirection="column"
        zIndex="1"
        position="fixed"
        top="2.75rem"
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
            padding="0.5rem 0.625rem"
            gap="1.25rem"
            borderBottom={
              width <= breakpoints.xl
                ? `0.063rem solid ${colors.darkBlue}`
                : `0.063rem solid ${colors.secondaryDarkBlue}`
            }
            justifyContent="start"
            alignItems="center"
            cursor="pointer"
            position="relative"
            width="100%"
            onMouseEnter={() => {
              setActiveIndex(index);
              setMouseEnter(true);
            }}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => {
              handleClick(item.id);
              setMouseEnter(true);
            }}
            backgroundColor={
              activeTab === item.id
                ? `${colors.activeSidebar}`
                : activeIndex === index
                ? `${colors.secondaryDarkBlue}`
                : "transparent"
            }
          >
            <Icon
              src={
                activeTab === item.id
                  ? item.hoveredIcon
                  : activeIndex === index
                  ? item.hoveredIcon
                  : item.icon
              }
              alt="sidebarIcon"
            />
            <Text color={colors.white} fontWeight="400" cursor="pointer">
              {item.label}
            </Text>
            {item.arrow && (
              <Icon src={item.arrow} position="absolute" right="1.25rem" />
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
              <Flex gap="0.188rem" width="100%">
                <Flex>
                  <Icon
                    width="2.75rem"
                    height="2.75rem"
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
                      fontSize="0.75rem"
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
                    padding="0.625rem"
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
                    borderBottom={`0.313rem solid ${colors.secondaryBlue}`}
                    padding="0.625rem"
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
              margin="0 0 2.75rem 0"
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
      {activeTab !== "home" && activeTab !== "" && (
        <ActiveSidebarMenuContainer
          left={mouseEnter ? "14.125rem" : "3rem"}
          backgroundColor={colors.activeSidebar}
          position="fixed"
          width="11.25rem"
          top="2.75rem"
          height=" 100% "
          zIndex="999"
          onMouseLeave={() => setMouseEnter(false)}
        >
          {sidebarSubItems
            .filter((subItem) => subItem.id === activeTab)
            .map((subItem) => (
              <Flex key={subItem.id} flexDirection="column">
                <Flex
                  borderBottom={`1px solid ${colors.sidebarBorderColor}`}
                  margin="0 0 0 1rem"
                  width="90%"
                >
                  <Text
                    color={colors.sidebarSubTitle}
                    fontSize="20px"
                    padding="1rem 1rem 1rem 0"
                  >
                    {subItem.title}
                  </Text>
                </Flex>
                {subItem.items?.map((item, index) => (
                  <Flex
                    key={item.id}
                    padding="0.5rem 1rem"
                    cursor="pointer"
                    backgroundColor={
                      sidebarSubActive === item.id
                        ? colors.sidebarHoverItem
                        : "transparent"
                    }
                    hover
                    hoverBackground={colors.sidebarHoverItem}
                    width="100%"
                    onClick={() => {
                      handleSidebarSubActive(item.id);
                      router.push(item.id);
                    }}
                  >
                    <Text
                      color={colors.white}
                      fontWeight="400"
                      cursor="pointer"
                    >
                      {item.label}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            ))}
        </ActiveSidebarMenuContainer>
      )}
    </Flex>
  );
};

export default Sidebar;
