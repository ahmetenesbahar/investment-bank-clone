import React from "react";
import { InfoBoxContainer, InfoIcon, NormalText } from "./InfoBox.styles";

const InfoBox: React.FC = () => {
  return (
    <InfoBoxContainer>
      <InfoIcon src="/assets/infoForgot_icon.png" alt="infoIcon" />
      <NormalText>
        Son 1 aylık dekontlarınız gösteriliyor. Dekont arama kriterlerini
        kullanarak farklı tarih aralıkları için sorgulama yapabilirsiniz.
      </NormalText>
    </InfoBoxContainer>
  );
};

export default InfoBox;
