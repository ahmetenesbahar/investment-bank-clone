import React from "react";
import {
  SelectedReceiptsContainer,
  NormalText,
  FlexDiv,
  Button,
} from "./SelectedReceipts.styles";
import { colors } from "@/styles/colors";
import { useItem } from "../../context/ItemContext";

const SelectedReceipts: React.FC = () => {
  const { checkedItems, totalReceipts, handleRemoveAll } = useItem();
  return (
    <SelectedReceiptsContainer>
      <NormalText>
        {checkedItems.size} / {totalReceipts} Dekont Seçili
      </NormalText>
      <FlexDiv>
        <Button
          color={colors.secondaryBlue}
          onClick={() => {
            handleRemoveAll();
          }}
        >
          Seçimi Kaldır
        </Button>
        <Button color={colors.white} backgroundColor={colors.secondaryBlue}>
          E-posta Gönder
        </Button>
      </FlexDiv>
    </SelectedReceiptsContainer>
  );
};

export default SelectedReceipts;
