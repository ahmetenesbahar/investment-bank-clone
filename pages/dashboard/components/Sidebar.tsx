import React, { useState } from "react";
import { Flex, Text, Icon } from "@/styles/styles";

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

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Flex
      width="226px"
      height="100vh"
      backgroundColor="#08335e"
      flexDirection="column"
      position="fixed"
    >
      {sidebarItems.map((item, index) => (
        <Flex
          key={index}
          padding="8px 10px"
          gap="20px"
          borderBottom="1px solid #072E54"
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
    </Flex>
  );
};

export default Sidebar;
