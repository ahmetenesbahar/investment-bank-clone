import React, { useState } from "react";
import { Flex, Icon, LogoutDiv, NavbarAvatarDiv, Text } from "@/styles/styles";
import SearchBar from "./SearchBar";
import useUser from "@/hooks/useGetUser";

const Navbar: React.FC = () => {
  const user = useUser();
  const today = new Date();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [userAvatarMenu, setUserAvatarMenu] = useState(false);

  const formatDateTime = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  const iconData = [
    { src: "assets/kampanyalar.png" },
    { src: "assets/edevlet.png" },
    { src: "assets/header_islemlistesi.png" },
    { src: "assets/header_mail.png" },
    { src: "assets/header_bildirim.png" },
    { src: "assets/header_favourite.png" },
    {
      src: "assets/hesaplama_araclarim_icon.png",
    },
    { src: "assets/print_icon.png" },
  ];

  return (
    <Flex
      justifyContent="space-between"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
      backgroundColor="#fff"
    >
      <Flex justifyContent="center" alignItems="center">
        <Flex borderRight="1px solid #e5e5e5 ">
          <img src="assets/header_logo.png" alt="" />
        </Flex>
        <SearchBar />
      </Flex>
      <Flex height="44px">
        {iconData.map((icon, index) => (
          <Flex
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            backgroundColor={activeIndex === index ? "#F2F9FF" : "transparent"}
          >
            <Icon src={icon.src} borderLeft={"1px solid #e5e5e5 "} />
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
            width="44px"
            height="44px"
          />
          <Flex
            flexDirection="column"
            justifyContent="center"
            width="220px"
            padding="5px 10px"
            cursor="pointer"
          >
            <Text
              color="#024487"
              fontWeight="600"
              cursor="pointer"
            >{`${user?.firstName} ${user?.lastName}`}</Text>
            <Text
              color="#024487"
              fontWeight="500"
              cursor="pointer"
            >{`Son Giriş : ${formatDateTime(today)}`}</Text>
          </Flex>

          {userAvatarMenu && (
            <Flex
              position="absolute"
              width="264px"
              bottom="-84px"
              flexDirection="column"
              gap="3px"
            >
              <Flex
                backgroundColor="#F2F9FF"
                width="100%"
                padding="10px"
                cursor="pointer "
              >
                <Text fontWeight="400" color="#024487" cursor="pointer ">
                  Fotoğraf Yükleyin
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
                  Profilinizi Güncelleyin
                </Text>
                <Text cursor="pointer " color="#024487">
                  100%
                </Text>
              </Flex>
            </Flex>
          )}
        </NavbarAvatarDiv>
        <LogoutDiv
          backgroundColor="#F2F9FF"
          justifyContent="center"
          alignItems="center"
          padding="0px 10px"
          cursor="pointer"
        >
          <Text fontWeight="500" cursor="pointer" color="#08335e">
            Çıkış
          </Text>
          <Icon src="/assets/header_logout.png" />
        </LogoutDiv>
      </Flex>
    </Flex>
  );
};

export default Navbar;
