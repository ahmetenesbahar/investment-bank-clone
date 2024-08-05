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

const Balance: React.FC = () => {
  const user = useUser();
  const { handlePageChange } = usePage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Flex flexDirection="column" width="100%">
      <Table>
        <thead>
          <Tr
            borderBottom={
              activeIndex === 0 ? "1px solid #009ff2" : "1px solid #e5e5e5 "
            }
          >
            <Th>Hesap Türü</Th>
            <Th>Hesap Adı / Hesap No</Th>
            <Th>Net Bakiye</Th>
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
                  setActiveIndex(activeIndex === index ? null : index);
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
                    {account.iban}
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
                    <Flex justifyContent="center" alignItems="center" gap="5px">
                      <Text
                        fontWeight="450"
                        color="#009ff2"
                        padding="0 5px"
                        cursor="pointer"
                        hover
                        hoverBackground="#e0f0ff"
                        hoverColor="#0079b2"
                      >
                        Havale
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
                        Hesap Hareketleri
                      </Text>
                    </Flex>
                  </Td>
                </Tr>
              )}
            </React.Fragment>
          ))}
          <Tr>
            <Td colSpan={3} borderBottom="1px solid #e5e5e5 " padding="15px">
              <Flex alignItems="center">
                <Text fontWeight="450" color="#000">
                  Henüz bir yatırım hesabınız yok, hemen açabilirsiniz.
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
        padding="15px 0 15px 15px"
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
          Hesapları Düzenle
        </Text>
        <Button border="1px solid #C1C9D3" backgroundColor="transparent">
          <Text color="#69a6e1" cursor="pointer" textAlign="center">
            Hesaplarıma Git
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Balance;
