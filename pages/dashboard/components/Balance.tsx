import React, { useState } from "react";
import {
  Flex,
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
import { usePage } from "../context/PageContext";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import { formatIBAN } from "../utils/formatting";
import { breakpoints } from "@/utils/constants";

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
                    ? "1px solid #009ff2"
                    : "1px solid #e5e5e5"
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
                    hoverBackground="#F2F9FF"
                    backgroundColor={
                      activeIndex === index ? "#F2F9FF" : "transparent"
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
                        : "1px solid #e5e5e5"
                    }
                    borderTop={
                      activeIndex === index ? "1px solid #009ff2" : "none"
                    }
                    borderLeft={
                      activeIndex === index ? "1px solid #009ff2" : "none"
                    }
                    borderRight={
                      activeIndex === index ? "1px solid #009ff2" : "none"
                    }
                  >
                    <Td padding="15px">
                      <Text
                        textTransform="capitalize"
                        fontWeight="450"
                        color="#000"
                        cursor="pointer"
                      >
                        {account.accountType}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontWeight="450" color="#000" cursor="pointer">
                        {formatIBAN(account.iban)}
                      </Text>
                    </Td>
                    <Td>
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        cursor="pointer"
                        padding="0 15px"
                      >
                        <Flex gap="4px" cursor="pointer">
                          <Text fontWeight="450" color="#000" cursor="pointer">
                            {account.balance}
                          </Text>
                          <Text fontWeight="450" color="#000" cursor="pointer">
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
                        activeIndex === index ? "#F2F9FF" : "transparent"
                      }
                      hoverBackground="#F2F9FF"
                      borderBottom={
                        activeIndex === index ? "1px solid #009ff2" : "none"
                      }
                      borderLeft={
                        activeIndex === index ? "1px solid #009ff2" : "none"
                      }
                      borderRight={
                        activeIndex === index ? "1px solid #009ff2" : "none"
                      }
                    >
                      <Td colSpan={3} padding="15px">
                        <Flex
                          justifyContent="center"
                          alignItems="center"
                          gap="5px"
                        >
                          <Text
                            fontWeight="450"
                            color="#009ff2"
                            padding="0 5px"
                            cursor="pointer"
                            hover
                            hoverBackground="#e0f0ff"
                            hoverColor="#0079b2"
                          >
                            {t("Transfer")}
                          </Text>
                          <VerticalLine width="1px" height="16px" />
                          <Text
                            fontWeight="450"
                            color="#009ff2"
                            padding="0 5px"
                            cursor="pointer"
                            hover
                            hoverBackground="#e0f0ff"
                            hoverColor="#0079b2"
                          >
                            EFT
                          </Text>
                          <VerticalLine width="1px" height="16px" />
                          <Text
                            fontWeight="450"
                            color="#009ff2"
                            padding="0 5px"
                            cursor="pointer"
                            hover
                            hoverBackground="#e0f0ff"
                            hoverColor="#0079b2"
                          >
                            {t("Account Activities")}
                          </Text>
                        </Flex>
                      </Td>
                    </Tr>
                  )}
                </React.Fragment>
              ))}
              <Tr>
                <Td
                  colSpan={3}
                  borderBottom="1px solid #e5e5e5 "
                  padding="15px"
                >
                  <Flex alignItems="center">
                    <Text fontWeight="450" color="#000">
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
            padding="15px 20px 15px 15px"
            borderBottom="1px solid #e5e5e5 "
          >
            <Text
              color="#69a6e1"
              textDecoration="underline"
              cursor="pointer"
              onClick={() => {
                handlePageChange("editAccounts");
              }}
            >
              {t("Edit Accounts")}
            </Text>
            <Button border="1px solid #C1C9D3" backgroundColor="transparent">
              <Text color="#69a6e1" cursor="pointer" textAlign="center">
                {t("My Accounts")}
              </Text>
            </Button>
          </Flex>
        </>
      ) : (
        <Flex flexDirection="column" width="100%" margin="1px 0 0 0">
          {user?.accounts.map((account: any, index: number) => (
            <React.Fragment key={index}>
              <Flex
                padding="10px"
                backgroundColor={
                  activeIndex === index ? "#F2F9FF" : "transparent"
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
                    : "1px solid #e5e5e5"
                }
                borderTop={activeIndex === index ? "1px solid #009ff2" : "none"}
                borderLeft={
                  activeIndex === index ? "1px solid #009ff2" : "none"
                }
                borderRight={
                  activeIndex === index ? "1px solid #009ff2" : "none"
                }
              >
                <Flex flexDirection="column" gap="8px" width="100%">
                  <Text
                    textTransform="capitalize"
                    fontWeight="700"
                    color="#000"
                    cursor="pointer"
                  >
                    {account.accountType}
                  </Text>
                  <Text
                    textTransform="capitalize"
                    fontWeight="450"
                    color="#000"
                    cursor="pointer"
                  >
                    {formatIBAN(account.iban)}
                  </Text>
                  <Flex gap="4px" cursor="pointer">
                    <Text fontWeight="450" color="#000" cursor="pointer">
                      {account.balance}
                    </Text>
                    <Text fontWeight="450" color="#000" cursor="pointer">
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
                <Flex
                  width="100%"
                  justifyContent="center"
                  alignItems="center"
                  padding="10px 0"
                  backgroundColor={
                    activeIndex === index ? "#F2F9FF" : "transparent"
                  }
                  borderBottom={
                    activeIndex === index ? "1px solid #009ff2" : "none"
                  }
                  borderLeft={
                    activeIndex === index ? "1px solid #009ff2" : "none"
                  }
                  borderRight={
                    activeIndex === index ? "1px solid #009ff2" : "none"
                  }
                >
                  <Text
                    fontWeight="450"
                    color="#009ff2"
                    padding="0 5px"
                    cursor="pointer"
                    hover
                    hoverBackground="#e0f0ff"
                    hoverColor="#0079b2"
                  >
                    {t("Transfer")}
                  </Text>
                  <VerticalLine width="1px" height="16px" />
                  <Text
                    fontWeight="450"
                    color="#009ff2"
                    padding="0 5px"
                    cursor="pointer"
                    hover
                    hoverBackground="#e0f0ff"
                    hoverColor="#0079b2"
                  >
                    EFT
                  </Text>
                  <VerticalLine width="1px" height="16px" />
                  <Text
                    fontWeight="450"
                    color="#009ff2"
                    padding="0 5px"
                    cursor="pointer"
                    hover
                    hoverBackground="#e0f0ff"
                    hoverColor="#0079b2"
                  >
                    {t("Account Activities")}
                  </Text>
                </Flex>
              )}
            </React.Fragment>
          ))}
          <Flex
            justifyContent="space-between"
            alignItems="center"
            padding="15px"
            borderBottom="1px solid #e5e5e5"
          >
            <Text
              color="#69a6e1"
              textDecoration="underline"
              cursor="pointer"
              onClick={() => {
                handlePageChange("editAccounts");
              }}
            >
              {t("Edit Accounts")}
            </Text>
            <Button border="1px solid #C1C9D3" backgroundColor="transparent">
              <Text color="#69a6e1" cursor="pointer" textAlign="center">
                {t("My Accounts")}
              </Text>
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Balance;
