import React, { useState, useEffect } from "react";
import {
  Flex,
  Icon,
  LogoutDiv,
  NavbarAvatarDiv,
  Text,
  NavbarContainer,
} from "@/styles/styles";
import SearchBar from "./SearchBar";
import useUser from "@/hooks/useGetUser";
import useMediaQuery from "@/hooks/useMediaQuery";
import { usePage } from "../context/PageContext";
import { useTranslation } from "next-i18next";
import { formatDateTime } from "../utils/formatting";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";

const Navbar: React.FC = () => {
  const user = useUser();
  const today = new Date();
  const width = useMediaQuery();
  const { handleOpenMenu } = usePage();
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [userAvatarMenu, setUserAvatarMenu] = useState(false);

  const iconData = [
    { src: "/assets/kampanyalar.png" },
    { src: "/assets/edevlet.png" },
    { src: "/assets/header_islemlistesi.png" },
    { src: "/assets/header_mail.png" },
    { src: "/assets/header_bildirim.png" },
    { src: "/assets/header_favourite.png" },
    {
      src: "/assets/hesaplama_araclarim_icon.png",
    },
    { src: "/assets/print_icon.png" },
  ];

  return (
    <NavbarContainer
      justifyContent="space-between"
      backgroundColor={colors.white}
      alignItems="center"
      position="fixed"
      width="100%"
    >
      <Flex justifyContent="center" alignItems="center">
        <Flex borderRight={`1px solid ${colors.borderColor}`}>
          {width >= breakpoints.lg ? (
            <img src="/assets/header_logo.png" alt="isbankLogo" />
          ) : (
            <Flex
              justifyContent="center"
              height="44px"
              alignItems="center"
              padding="10px"
              cursor="pointer"
              onClick={() => {
                handleOpenMenu();
              }}
            >
              <Text
                color={colors.secondaryBlue}
                fontWeight="500"
                cursor="pointer"
              >
                {t("Menu")}
              </Text>
            </Flex>
          )}
        </Flex>
        {width > breakpoints.xl && <SearchBar />}
      </Flex>

      {width >= breakpoints.lg && (
        <Flex height="44px">
          {iconData.map((icon, index) => (
            <Flex
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              backgroundColor={
                activeIndex === index ? `${colors.hoverWhite}` : "transparent"
              }
            >
              <Icon
                src={icon.src}
                borderLeft={`1px solid ${colors.borderColor}`}
                alt="NavbarIcon"
              />
            </Flex>
          ))}
          <NavbarAvatarDiv
            cursor="pointer"
            onMouseEnter={() => setUserAvatarMenu(true)}
            onMouseLeave={() => setUserAvatarMenu(false)}
            position="relative"
          >
            <Icon
              src="/assets/DefaultProfilePic.jpg"
              alt="ProfilePic"
              width="44px"
              height="44px"
            />
            {width >= breakpoints.xl && (
              <Flex
                flexDirection="column"
                justifyContent="center"
                width="220px"
                padding="5px 10px"
                cursor="pointer"
              >
                <Text
                  color={colors.secondaryBlue}
                  fontWeight="600"
                  cursor="pointer"
                >{`${user?.firstName} ${user?.lastName}`}</Text>
                <Text
                  color={colors.secondaryBlue}
                  fontWeight="500"
                  cursor="pointer"
                >{`${t("Last Login")} : ${formatDateTime(today)}`}</Text>
              </Flex>
            )}

            {userAvatarMenu && (
              <Flex
                position="absolute"
                width="264px"
                bottom="-84px"
                flexDirection="column"
                gap="3px"
              >
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
              </Flex>
            )}
          </NavbarAvatarDiv>
          <LogoutDiv
            backgroundColor={colors.hoverWhite}
            justifyContent="center"
            alignItems="center"
            padding="0px 10px"
            cursor="pointer"
          >
            <Text
              fontWeight="500"
              cursor="pointer"
              color={colors.loginHeaderBlue}
            >
              {t("logout")}
            </Text>
            <Icon src="/assets/header_logout.png" alt="logoutIcon" />
          </LogoutDiv>
        </Flex>
      )}

      {width < breakpoints.lg && (
        <Flex>
          <img src="/assets/header_logo.png" alt="isbankLogo" />
        </Flex>
      )}

      {width < breakpoints.lg && (
        <Flex
          backgroundColor={colors.hoverWhite}
          width="55px"
          justifyContent="center"
        >
          <Icon src="/assets/header_logout.png" alt="logoutIcon" />
        </Flex>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
