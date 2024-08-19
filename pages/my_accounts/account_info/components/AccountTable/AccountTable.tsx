import React, { useState } from "react";
import {
  AccountTableContainer,
  AccountTableHeader,
  HeaderText,
  AccountTableBody,
  AccountTableItem,
  FlexColumn,
  BlueText,
  NormalText,
  FlexDiv,
  EditIcon,
  VerticalLine,
  BoldText,
  AccountTableItemDetail,
  CenteredFlex,
  GrayLine,
  ResponsiveText,
} from "./AccountTable.styles";
import useUser from "@/hooks/useGetUser";
import { Account } from "@/types/types";
import { colors } from "@/styles/colors";
import { useTranslation } from "next-i18next";
import useMediaQuery from "@/hooks/useMediaQuery";
import { breakpoints } from "@/utils/constants";
import { useFilter } from "../../context/FilterContext";

interface AccountTableProps {
  isAllSelected: boolean;
}

const AccountTable: React.FC<AccountTableProps> = ({ isAllSelected }) => {
  const user = useUser();
  const width = useMediaQuery();
  const { t } = useTranslation();
  const { currencyFilter, accountTypeFilter, searchParameter } = useFilter();
  const [activeIndices, setActiveIndices] = useState<number[]>([0]);

  const handleBoxToggle = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  const currencyFilters = Array.isArray(currencyFilter)
    ? currencyFilter
    : [currencyFilter];
  const accountTypeFilters = Array.isArray(accountTypeFilter)
    ? accountTypeFilter
    : [accountTypeFilter];

  const filteredAccounts = user?.accounts.filter((account: Account) => {
    const isCurrencyMatch =
      !currencyFilters.length || currencyFilters.includes(account.currency);
    const isAccountTypeMatch =
      !accountTypeFilters.length ||
      accountTypeFilters.includes(account.accountType);
    const isSearchMatch =
      !searchParameter ||
      account.currency.toLowerCase().includes(searchParameter.toLowerCase()) ||
      account.accountName
        .toLowerCase()
        .includes(searchParameter.toLowerCase()) ||
      account.iban.toLowerCase().includes(searchParameter.toLowerCase());

    return isCurrencyMatch && isAccountTypeMatch && isSearchMatch;
  });

  return (
    <AccountTableContainer>
      <AccountTableHeader>
        <HeaderText>{t("Current Accounts")}</HeaderText>
      </AccountTableHeader>
      <AccountTableBody>
        {filteredAccounts?.map((account: Account, index: number) => (
          <React.Fragment key={index}>
            {width > breakpoints.md ? (
              <AccountTableItem
                onClick={() => handleBoxToggle(index)}
                active={isAllSelected || activeIndices.includes(index)}
              >
                <VerticalLine
                  active={isAllSelected || activeIndices.includes(index)}
                />
                <FlexDiv>
                  <FlexColumn width="20%">
                    <FlexDiv>
                      <EditIcon
                        src="/assets/edit_pencil_icon.png"
                        alt="editIcon"
                      />
                      <BlueText>{account.currency}</BlueText>
                    </FlexDiv>
                    <NormalText>{t(`${account.accountName}`)}</NormalText>
                  </FlexColumn>
                  <FlexColumn width="55%">
                    <NormalText textTransform="uppercase">
                      {user.branch.code}-{user.branch.name}
                    </NormalText>
                    <NormalText opacity="0.5">{account.iban}</NormalText>
                  </FlexColumn>
                  <FlexColumn width="20%">
                    <BoldText textTransform="uppercase">
                      {account.balance.toLocaleString()} {account.currency}
                    </BoldText>
                    <FlexDiv width="1px" height="1.125rem"></FlexDiv>
                  </FlexColumn>
                  <EditIcon
                    src="/assets/entity_list_lower_arrow.png"
                    alt="editIcon"
                    transform={
                      activeIndices.includes(index) ? "rotate(180deg)" : ""
                    }
                  />
                </FlexDiv>
                {(isAllSelected || activeIndices.includes(index)) && (
                  <AccountTableItemDetail justifyContent="flex-end">
                    <CenteredFlex gap="0.313rem">
                      <BlueText
                        fontWeight="450"
                        padding="0 0.313rem"
                        cursor="pointer"
                        hover
                        hoverBackground={colors.secondaryHoverBlue}
                        hoverColor={colors.hoverBlue}
                      >
                        {t("Account Details")}
                      </BlueText>
                      <GrayLine width="0.063rem" height="1rem" />
                      <BlueText
                        fontWeight="450"
                        padding="0 0.313rem"
                        cursor="pointer"
                        hover
                        hoverBackground={colors.secondaryHoverBlue}
                        hoverColor={colors.hoverBlue}
                      >
                        {t("Close Account")}
                      </BlueText>
                      <GrayLine width="0.063rem" height="1rem" />
                      <BlueText
                        fontWeight="450"
                        padding="0 0.313rem"
                        cursor="pointer"
                        hover
                        hoverBackground={colors.secondaryHoverBlue}
                        hoverColor={colors.hoverBlue}
                      >
                        {t("Account Activities")}
                      </BlueText>
                    </CenteredFlex>
                  </AccountTableItemDetail>
                )}
              </AccountTableItem>
            ) : (
              <AccountTableItem>
                <VerticalLine />
                <FlexDiv justifyContent="space-between">
                  <ResponsiveText color="red">
                    {account.currency}
                  </ResponsiveText>
                  <EditIcon
                    src="/assets/entity_list_lower_arrow.png"
                    alt="editIcon"
                    transform={
                      activeIndices.includes(index) ? "rotate(180deg)" : ""
                    }
                  />
                </FlexDiv>
                <FlexDiv>
                  <NormalText>{account.accountType}</NormalText>
                </FlexDiv>
                <FlexDiv justifyContent="flex-end">
                  <BoldText textTransform="uppercase">
                    {account.balance.toLocaleString()} {account.currency}
                  </BoldText>
                </FlexDiv>
                <FlexDiv>
                  <NormalText textTransform="uppercase">
                    1056 - Üsküdar İstanbul
                  </NormalText>
                </FlexDiv>
                <FlexDiv>
                  <NormalText>{account.iban}</NormalText>
                </FlexDiv>
              </AccountTableItem>
            )}
          </React.Fragment>
        ))}
      </AccountTableBody>
    </AccountTableContainer>
  );
};

export default AccountTable;
