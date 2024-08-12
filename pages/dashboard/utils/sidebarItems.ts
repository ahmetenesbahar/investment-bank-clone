import { TFunction } from "next-i18next";
export const getSidebarItems = (t: TFunction) => [
  {
    icon: "/assets/icon_anasayfa.png",
    label: `${t("Home")}`,
    hoveredIcon: "/assets/icon_anasayfa_selected.png",
  },
  {
    icon: "/assets/icon_hesaplarim.png",
    hoveredIcon: "/assets/icon_hesaplarim_selected.png",
    label: `${t("My Accounts")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_paraaktarma.png",
    hoveredIcon: "/assets/icon_paraaktarma_selected.png",
    label: `${t("Money Transfers")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_yatirim.png",
    hoveredIcon: "/assets/icon_yatirim_selected.png",
    label: `${t("Investment")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_doviz.png",
    hoveredIcon: "/assets/icon_doviz_selected.png",
    label: `${t("Foreign Currency")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kartlarim.png",
    hoveredIcon: "/assets/icon_kartlarim_selected.png",
    label: `${t("My Cards")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_takvim.png",
    hoveredIcon: "/assets/icon_takvim_selected.png",
    label: `${t("Payments")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_uyeisyeri.png",
    hoveredIcon: "/assets/icon_uyeisyeri_selected.png",
    label: `${t("My Merchant")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kredilerim.png",
    hoveredIcon: "/assets/icon_kredilerim_selected.png",
    label: `${t("My Loans")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_sigorta.png",
    hoveredIcon: "/assets/icon_sigorta_selected.png",
    label: `${t("Insurance")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_bireyselemeklilik.png",
    hoveredIcon: "/assets/icon_bireyselemeklilik_selected.png",
    label: `${t("Pension Contract")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_basvuruurunler.png",
    hoveredIcon: "/assets/icon_basvuruurunler_selected.png",
    label: `${t("Applications")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_ayarlar.png",
    hoveredIcon: "/assets/icon_ayarlar_selected.png",
    label: `${t("Settings")}`,
    arrow: "/assets/menu_arrow.png",
  },
];

export const getSmallSidebarItems = (t: TFunction) => [
  {
    icon: "/assets/icon_anasayfa.png",
    label: `${t("Home")}`,
    hoveredIcon: "/assets/icon_anasayfa_selected.png",
  },
  {
    icon: "/assets/icon_hesaplarim.png",
    hoveredIcon: "/assets/icon_hesaplarim_selected.png",
    label: `${t("My Accounts")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_paraaktarma.png",
    hoveredIcon: "/assets/icon_paraaktarma_selected.png",
    label: `${t("Money Transfers")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_yatirim.png",
    hoveredIcon: "/assets/icon_yatirim_selected.png",
    label: `${t("Investment")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_doviz.png",
    hoveredIcon: "/assets/icon_doviz_selected.png",
    label: `${t("Foreign Currency")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kartlarim.png",
    hoveredIcon: "/assets/icon_kartlarim_selected.png",
    label: `${t("My Cards")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_takvim.png",
    hoveredIcon: "/assets/icon_takvim_selected.png",
    label: `${t("Payments")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_uyeisyeri.png",
    hoveredIcon: "/assets/icon_uyeisyeri_selected.png",
    label: `${t("My Merchant")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kredilerim.png",
    hoveredIcon: "/assets/icon_kredilerim_selected.png",
    label: `${t("My Loans")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_sigorta.png",
    hoveredIcon: "/assets/icon_sigorta_selected.png",
    label: `${t("Insurance")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_bireyselemeklilik.png",
    hoveredIcon: "/assets/icon_bireyselemeklilik_selected.png",
    label: `${t("Pension Contract")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_basvuruurunler.png",
    hoveredIcon: "/assets/icon_basvuruurunler_selected.png",
    label: `${t("Applications")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_ayarlar.png",
    hoveredIcon: "/assets/icon_ayarlar_selected.png",
    label: `${t("Settings")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_kampanyalar.png",
    hoveredIcon: "/assets/icon_kampanyalar_selected.png",
    label: `${t("Campaigns")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_bizeulasin.png",
    hoveredIcon: "/assets/icon_bizeulasin_selected.png",
    label: `${t("Contact us")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_sikkullanilanlar.png",
    hoveredIcon: "/assets/icon_sikkullanilanlar_selected.png",
    label: `${t("Frequently Used Transactions")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_fvo.png",
    hoveredIcon: "/assets/icon_fvo_selected.png",
    label: `${t("Prices and Rates")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_bildirim.png",
    hoveredIcon: "/assets/icon_bildirim_selected.png",
    label: `${t("Notifications")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_islemlistesi.png",
    hoveredIcon: "/assets/icon_islemlistesi_selected.png",
    label: `${t("Transaction Lists")}`,
    arrow: "/assets/menu_arrow.png",
  },
  {
    icon: "/assets/icon_edevlet.png",
    hoveredIcon: "/assets/icon_edevlet_selected.png",
    label: `${t("E-Government")}`,
    arrow: "/assets/menu_arrow.png",
  },
];