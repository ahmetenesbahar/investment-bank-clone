import React, { useState } from "react";
import {
  Flex,
  CenteredFlex,
  Text,
  Table,
  Td,
  Th,
  Icon,
  Tr,
  VerticalLine,
  Button,
} from "@/styles/styles";
import useUser from "@/hooks/useGetUser";
import { usePage } from "../../../context/PageContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import { formatIBAN } from "../utils/formatting";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";

enum ActiveIndexEnum {
  None = -1,
  Account1 = 0,
  Account2 = 1,
}

const Balance: React.FC = () => {
  const user = useUser();
  const width = useMediaQuery();
  const { t } = useTranslation();
  const { handlePageChange } = usePage();
  const [activeIndex, setActiveIndex] = useState<ActiveIndexEnum>(
    ActiveIndexEnum.None
  );

  return (
    <Flex flexDirection="column" width="100%">
      {width >= breakpoints.md ? (
        <>
          <Table>
            <thead>
              <Tr
                borderBottom={
                  activeIndex === ActiveIndexEnum.Account1
                    ? `0.063rem solid ${colors.borderBlue}`
                    : `0.063rem solid ${colors.borderColor}`
                }
              >
                <Th>{t("Account Type")}</Th>
                <Th>{t("Nickname / Account Number")}</Th>
                <Th>{t("Net Balance")}</Th>
              </Tr>
            </thead>
            <tbody>
              {user?.accounts.map((account: any, index: number) => (
                <React.Fragment key={index}>
                  <Tr
                    hoverBackground={colors.hoverWhite}
                    backgroundColor={
                      activeIndex === index
                        ? `${colors.hoverWhite}`
                        : "transparent"
                    }
                    cursor="pointer"
                    onClick={() => {
                      setActiveIndex(
                        activeIndex === index ? ActiveIndexEnum.None : index
                      );
                    }}
                    borderBottom={
                      activeIndex === index || activeIndex === index + 1
                        ? "none"
                        : `0.063rem solid ${colors.borderColor}`
                    }
                    borderTop={
                      activeIndex === index
                        ? `0.063rem solid ${colors.borderBlue}`
                        : "none"
                    }
                    borderLeft={
                      activeIndex === index
                        ? `0.063rem solid ${colors.borderBlue}`
                        : "none"
                    }
                    borderRight={
                      activeIndex === index
                        ? `0.063rem solid ${colors.borderBlue}`
                        : "none"
                    }
                  >
                    <Td padding="0.938rem">
                      <Text
                        textTransform="capitalize"
                        fontWeight="450"
                        color={colors.black}
                        cursor="pointer"
                      >
                        {account.accountType}
                      </Text>
                    </Td>
                    <Td>
                      <Text
                        fontWeight="450"
                        color={colors.black}
                        cursor="pointer"
                      >
                        {formatIBAN(account.iban)}
                      </Text>
                    </Td>
                    <Td>
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        cursor="pointer"
                        padding="0 0.938rem"
                      >
                        <Flex gap="0.25rem" cursor="pointer">
                          <Text
                            fontWeight="450"
                            color={colors.black}
                            cursor="pointer"
                          >
                            {account.balance}
                          </Text>
                          <Text
                            fontWeight="450"
                            color={colors.black}
                            cursor="pointer"
                          >
                            {account.currency}
                          </Text>
                        </Flex>
                        <Icon
                          src="/assets/lower_arrow_dark_blue.png"
                          alt="lower_arrow"
                          transform={
                            activeIndex === index
                              ? "rotate(180deg)"
                              : "rotate(0deg)"
                          }
                        />
                      </Flex>
                    </Td>
                  </Tr>
                  {activeIndex === index && (
                    <Tr
                      backgroundColor={
                        activeIndex === index
                          ? `${colors.hoverWhite}`
                          : "transparent"
                      }
                      hoverBackground={colors.hoverWhite}
                      borderBottom={
                        activeIndex === index
                          ? `0.063rem solid ${colors.borderBlue}`
                          : "none"
                      }
                      borderLeft={
                        activeIndex === index
                          ? `0.063rem solid ${colors.borderBlue}`
                          : "none"
                      }
                      borderRight={
                        activeIndex === index
                          ? `0.063rem solid ${colors.borderBlue}`
                          : "none"
                      }
                    >
                      <Td colSpan={3} padding="0.938rem">
                        <CenteredFlex gap="0.313rem">
                          <Text
                            fontWeight="450"
                            color={colors.borderBlue}
                            padding="0 0.313rem"
                            cursor="pointer"
                            hover
                            hoverBackground={colors.secondaryHoverBlue}
                            hoverColor={colors.hoverBlue}
                          >
                            {t("Transfer")}
                          </Text>
                          <VerticalLine width="0.063rem" height="1rem" />
                          <Text
                            fontWeight="450"
                            color={colors.borderBlue}
                            padding="0 0.313rem"
                            cursor="pointer"
                            hover
                            hoverBackground={colors.secondaryHoverBlue}
                            hoverColor={colors.hoverBlue}
                          >
                            EFT
                          </Text>
                          <VerticalLine width="0.063rem" height="1rem" />
                          <Text
                            fontWeight="450"
                            color={colors.borderBlue}
                            padding="0 0.313rem"
                            cursor="pointer"
                            hover
                            hoverBackground={colors.secondaryHoverBlue}
                            hoverColor={colors.hoverBlue}
                          >
                            {t("Account Activities")}
                          </Text>
                        </CenteredFlex>
                      </Td>
                    </Tr>
                  )}
                </React.Fragment>
              ))}
              <Tr>
                <Td
                  colSpan={3}
                  borderBottom={`0.063rem solid ${colors.borderColor}`}
                  padding="0.938rem"
                >
                  <Flex alignItems="center">
                    <Text fontWeight="450" color={colors.black}>
                      {t(
                        "You don't have any investment account, click to open."
                      )}
                    </Text>
                  </Flex>
                </Td>
              </Tr>
            </tbody>
          </Table>
          <Flex
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            padding="0.938rem 1.25rem 0.938rem 0.938rem"
            borderBottom={`0.063rem solid ${colors.borderColor}`}
          >
            <Text
              color={colors.textBlue}
              textDecoration="underline"
              cursor="pointer"
              onClick={() => {
                handlePageChange("editAccounts");
              }}
            >
              {t("Edit Accounts")}
            </Text>
            <Button
              border={`0.063rem solid  ${colors.borderColor}`}
              backgroundColor="transparent"
            >
              <Text color={colors.textBlue} cursor="pointer" textAlign="center">
                {t("My Accounts")}
              </Text>
            </Button>
          </Flex>
        </>
      ) : (
        <Flex flexDirection="column" width="100%" margin="0.063rem 0 0 0">
          {user?.accounts.map((account: any, index: number) => (
            <React.Fragment key={index}>
              <Flex
                padding="0.625rem"
                backgroundColor={
                  activeIndex === index ? `${colors.hoverWhite}` : "transparent"
                }
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                onClick={() => {
                  setActiveIndex(
                    activeIndex === index ? ActiveIndexEnum.None : index
                  );
                }}
                borderBottom={
                  activeIndex === index || activeIndex === index + 1
                    ? "none"
                    : `0.063rem solid ${colors.borderColor}`
                }
                borderTop={
                  activeIndex === index
                    ? `0.063rem solid ${colors.borderBlue}`
                    : "none"
                }
                borderLeft={
                  activeIndex === index
                    ? `0.063rem solid ${colors.borderBlue}`
                    : "none"
                }
                borderRight={
                  activeIndex === index
                    ? `0.063rem solid ${colors.borderBlue}`
                    : "none"
                }
              >
                <Flex flexDirection="column" gap="0.5rem" width="100%">
                  <Text
                    textTransform="capitalize"
                    fontWeight="700"
                    color={colors.black}
                    cursor="pointer"
                  >
                    {account.accountType}
                  </Text>
                  <Text
                    textTransform="capitalize"
                    fontWeight="450"
                    color={colors.black}
                    cursor="pointer"
                  >
                    {formatIBAN(account.iban)}
                  </Text>
                  <Flex gap="0.25rem" cursor="pointer">
                    <Text
                      fontWeight="450"
                      color={colors.black}
                      cursor="pointer"
                    >
                      {account.balance}
                    </Text>
                    <Text
                      fontWeight="450"
                      color={colors.black}
                      cursor="pointer"
                    >
                      {account.currency}
                    </Text>
                  </Flex>
                </Flex>
                <Icon
                  src="/assets/lower_arrow_dark_blue.png"
                  alt="lower_arrow"
                  transform={
                    activeIndex === index ? "rotate(180deg)" : "rotate(0deg)"
                  }
                />
              </Flex>
              {activeIndex === index && (
                <CenteredFlex
                  width="100%"
                  padding="0.625rem 0"
                  backgroundColor={
                    activeIndex === index
                      ? `${colors.hoverWhite}`
                      : "transparent"
                  }
                  borderBottom={
                    activeIndex === index
                      ? `0.063rem solid ${colors.borderBlue}`
                      : "none"
                  }
                  borderLeft={
                    activeIndex === index
                      ? `0.063rem solid ${colors.borderBlue}`
                      : "none"
                  }
                  borderRight={
                    activeIndex === index
                      ? `0.063rem solid ${colors.borderBlue}`
                      : "none"
                  }
                >
                  <Text
                    fontWeight="450"
                    color={colors.borderBlue}
                    padding="0 0.313rem"
                    cursor="pointer"
                    hover
                    hoverBackground={colors.secondaryHoverBlue}
                    hoverColor={colors.hoverBlue}
                  >
                    {t("Transfer")}
                  </Text>
                  <VerticalLine width="0.063rem" height="1rem" />
                  <Text
                    fontWeight="450"
                    color={colors.borderBlue}
                    padding="0 0.313rem"
                    cursor="pointer"
                    hover
                    hoverBackground={colors.secondaryHoverBlue}
                    hoverColor={colors.hoverBlue}
                  >
                    EFT
                  </Text>
                  <VerticalLine width="0.063rem" height="1rem" />
                  <Text
                    fontWeight="450"
                    color={colors.borderBlue}
                    padding="0 0.313rem"
                    cursor="pointer"
                    hover
                    hoverBackground={colors.secondaryHoverBlue}
                    hoverColor={colors.hoverBlue}
                  >
                    {t("Account Activities")}
                  </Text>
                </CenteredFlex>
              )}
            </React.Fragment>
          ))}
          <Flex
            justifyContent="space-between"
            alignItems="center"
            padding={width < breakpoints.md ? "0.625rem" : "0.938rem 1.25rem"}
            width="100%"
            borderBottom={`0.063rem solid ${colors.borderColor}`}
          >
            {width < breakpoints.md ? (
              <Button
                border={`0.063rem solid  ${colors.borderColor}`}
                backgroundColor="transparent"
                width="100%"
              >
                <Text
                  color={colors.textBlue}
                  cursor="pointer"
                  textAlign="center"
                >
                  {t("My Accounts")}
                </Text>
              </Button>
            ) : (
              <>
                <Text
                  color={colors.textBlue}
                  textDecoration="underline"
                  cursor="pointer"
                  onClick={() => {
                    handlePageChange("editAccounts");
                  }}
                >
                  {t("Edit Accounts")}
                </Text>
                <Button
                  border={`0.063rem solid  ${colors.borderColor}`}
                  backgroundColor="transparent"
                >
                  <Text
                    color={colors.textBlue}
                    cursor="pointer"
                    textAlign="center"
                  >
                    {t("My Accounts")}
                  </Text>
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Balance;
