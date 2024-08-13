import React, { useState, useEffect } from "react";
import {
  Flex,
  Icon,
  LogoutDiv,
  NavbarAvatarDiv,
  Text,
  NavbarContainer,
  CenteredFlex,
} from "@/styles/styles";
import SearchBar from "../pages/dashboard/components/SearchBar";
import useUser from "@/hooks/useGetUser";
import useMediaQuery from "@/hooks/useMediaQuery";
import { usePage } from "../pages/dashboard/context/PageContext";
import { useTranslation } from "next-i18next";
import { formatDateTime } from "../pages/dashboard/utils/formatting";
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
      <CenteredFlex>
        <Flex borderRight={`0.063rem solid ${colors.borderColor}`}>
          {width >= breakpoints.lg ? (
            <img src="/assets/header_logo.png" alt="isbankLogo" />
          ) : (
            <CenteredFlex
              height="2.75rem"
              padding="0.625rem"
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
            </CenteredFlex>
          )}
        </Flex>
        {width > breakpoints.xl && <SearchBar />}
      </CenteredFlex>

      {width >= breakpoints.lg && (
        <Flex height="2.75rem">
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
                borderLeft={`0.063rem solid ${colors.borderColor}`}
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
              alt="profilePicture"
              width="2.75rem"
            />
            {width >= breakpoints.xl && (
              <Flex
                flexDirection="column"
                justifyContent="center"
                width="13.75rem"
                padding="0.313rem 0.625rem"
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
                width="16.5rem"
                bottom="-5.25rem"
                flexDirection="column"
                gap="0.188rem"
              >
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
              </Flex>
            )}
          </NavbarAvatarDiv>
          <CenteredFlex
            backgroundColor={colors.hoverWhite}
            padding="0px 0.625rem"
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
          </CenteredFlex>
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
          width="3.438rem"
          justifyContent="center"
        >
          <Icon src="/assets/header_logout.png" alt="logoutIcon" />
        </Flex>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
