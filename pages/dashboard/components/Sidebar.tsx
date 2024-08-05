import React, { useState } from "react";
import { Flex, Text, Icon, DashboardSidebarContainer } from "@/styles/styles";
import useMediaQuery from "@/hooks/useMediaQuery";
import SearchBar from "./SearchBar";
import { usePage } from "../context/PageContext";
import useUser from "@/hooks/useGetUser";

const sidebarItems = [
  {
    icon: "/assets/icon_anasayfa.png",
    label: "Anasayfa",
    hoveredIcon: "/assets/icon_anasayfa_selected.png",
  },
  {
    icon: "/assets/icon_hesaplarim.png",
    hoveredIcon: "/assets/icon_hesaplarim_selected.png",
    label: "Hesaplarım",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_paraaktarma.png",
    hoveredIcon: "/assets/icon_paraaktarma_selected.png",
    label: "Para Aktarma",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_yatirim.png",
    hoveredIcon: "/assets/icon_yatirim_selected.png",
    label: "Yatırım",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_doviz.png",
    hoveredIcon: "/assets/icon_doviz_selected.png",
    label: "Döviz",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kartlarim.png",
    hoveredIcon: "/assets/icon_kartlarim_selected.png",
    label: "Kartlarım",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_uyeisyeri.png",
    hoveredIcon: "/assets/icon_uyeisyeri_selected.png",
    label: "Ödemeler",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kredilerim.png",
    hoveredIcon: "/assets/icon_kredilerim_selected.png",
    label: "Üye İşyeri",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_sigorta.png",
    hoveredIcon: "/assets/icon_sigorta_selected.png",
    label: "Kredilerim",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_bireyselemeklilik.png",
    hoveredIcon: "/assets/icon_bireyselemeklilik_selected.png",
    label: "Sigorta",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_basvuruurunler.png",
    hoveredIcon: "/assets/icon_basvuruurunler_selected.png",
    label: "Bireysel Emeklilik",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_ayarlar.png",
    hoveredIcon: "/assets/icon_ayarlar_selected.png",
    label: "Ayarlar",
    arrow: "/assets/menu_arrow.png",
  },
];

const mediumSidebarItems = [
  {
    icon: "/assets/icon_anasayfa.png",
    label: "Anasayfa",
    hoveredIcon: "/assets/icon_anasayfa_selected.png",
  },
  {
    icon: "/assets/icon_hesaplarim.png",
    hoveredIcon: "/assets/icon_hesaplarim_selected.png",
    label: "Hesaplarım",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_paraaktarma.png",
    hoveredIcon: "/assets/icon_paraaktarma_selected.png",
    label: "Para Aktarma",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_yatirim.png",
    hoveredIcon: "/assets/icon_yatirim_selected.png",
    label: "Yatırım",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_doviz.png",
    hoveredIcon: "/assets/icon_doviz_selected.png",
    label: "Döviz",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kartlarim.png",
    hoveredIcon: "/assets/icon_kartlarim_selected.png",
    label: "Kartlarım",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_takvim.png",
    hoveredIcon: "/assets/icon_takvim_selected.png",
    label: "Ödemeler",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_uyeisyeri.png",
    hoveredIcon: "/assets/icon_uyeisyeri_selected.png",
    label: "Üye İşyeri",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kredilerim.png",
    hoveredIcon: "/assets/icon_kredilerim_selected.png",
    label: "Kredilerim",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_sigorta.png",
    hoveredIcon: "/assets/icon_sigorta_selected.png",
    label: "Sigorta",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_bireyselemeklilik.png",
    hoveredIcon: "/assets/icon_bireyselemeklilik_selected.png",
    label: "Bireysel Emeklilik",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_basvuruurunler.png",
    hoveredIcon: "/assets/icon_basvuruurunler_selected.png",
    label: "Başvuru - Ürünler",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_ayarlar.png",
    hoveredIcon: "/assets/icon_ayarlar_selected.png",
    label: "Ayarlar",
    arrow: "/assets/menu_arrow.png",
  },
];

const smallSidebarItems = [
  {
    icon: "/assets/icon_anasayfa.png",
    label: "Anasayfa",
    hoveredIcon: "/assets/icon_anasayfa_selected.png",
  },
  {
    icon: "/assets/icon_hesaplarim.png",
    hoveredIcon: "/assets/icon_hesaplarim_selected.png",
    label: "Hesaplarım",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_paraaktarma.png",
    hoveredIcon: "/assets/icon_paraaktarma_selected.png",
    label: "Para Aktarma",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_yatirim.png",
    hoveredIcon: "/assets/icon_yatirim_selected.png",
    label: "Yatırım",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_doviz.png",
    hoveredIcon: "/assets/icon_doviz_selected.png",
    label: "Döviz",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kartlarim.png",
    hoveredIcon: "/assets/icon_kartlarim_selected.png",
    label: "Kartlarım",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_takvim.png",
    hoveredIcon: "/assets/icon_takvim_selected.png",
    label: "Ödemeler",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_uyeisyeri.png",
    hoveredIcon: "/assets/icon_uyeisyeri_selected.png",
    label: "Üye İşyeri",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kredilerim.png",
    hoveredIcon: "/assets/icon_kredilerim_selected.png",
    label: "Kredilerim",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_sigorta.png",
    hoveredIcon: "/assets/icon_sigorta_selected.png",
    label: "Sigorta",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_bireyselemeklilik.png",
    hoveredIcon: "/assets/icon_bireyselemeklilik_selected.png",
    label: "Bireysel Emeklilik",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_basvuruurunler.png",
    hoveredIcon: "/assets/icon_basvuruurunler_selected.png",
    label: "Başvuru - Ürünler",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_ayarlar.png",
    hoveredIcon: "/assets/icon_ayarlar_selected.png",
    label: "Ayarlar",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kampanyalar.png",
    hoveredIcon: "/assets/icon_kampanyalar_selected.png",
    label: "Kampanyalar",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_bizeulasin.png",
    hoveredIcon: "/assets/icon_bizeulasin_selected.png",
    label: "Bize Ulaşın",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_sikkullanilanlar.png",
    hoveredIcon: "/assets/icon_sikkullanilanlar_selected.png",
    label: "Sık Kullanılanlar",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_fvo.png",
    hoveredIcon: "/assets/icon_fvo_selected.png",
    label: "Fiyat ve Oranlar",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_bildirim.png",
    hoveredIcon: "/assets/icon_bildirim_selected.png",
    label: "Bildirimler",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_islemlistesi.png",
    hoveredIcon: "/assets/icon_islemlistesi_selected.png",
    label: "İşlem Listesi",
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_edevlet.png",
    hoveredIcon: "/assets/icon_edevlet_selected.png",
    label: "E-Devlet",
    arrow: "/assets/menu_arrow.png",
  },
];

const Sidebar: React.FC = () => {
  const { menu } = usePage();
  const user = useUser();
  const width = useMediaQuery();
  const today = new Date();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  const itemsToRender =
    width <= 1024
      ? smallSidebarItems
      : width <= 1280
      ? mediumSidebarItems
      : sidebarItems;

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
      height="calc(100vh - 44px)"
      backgroundColor={width <= 1280 ? "#1C345C" : "#08335e"}
      flexDirection="column"
      width="100%"
      zIndex="2"
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
                  >{`Son Giriş : ${formatDateTime(today)}`}</Text>
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
              </>
            )}
          </Flex>
          <Flex backgroundColor="#F2F9FF" width="100%" alignItems="center">
            <Icon src="/assets/header_logout.png" />
            <Text fontWeight="500" cursor="pointer" color="#08335e">
              Çıkış
            </Text>
          </Flex>
        </>
      )}
    </DashboardSidebarContainer>
  );
};

export default Sidebar;
