import React, { useState, useEffect, useRef } from "react";
import {
  SearchBarInput,
  SearchBarCloseIcon,
  Flex,
  Icon,
} from "@/styles/styles";

import useMediaQuery from "@/hooks/useMediaQuery";

import { useTranslation } from "next-i18next";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";

const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  const [closeIcon, setCloseIcon] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const width = useMediaQuery();

  useEffect(() => {
    if (searchValue === "") {
      setCloseIcon(false);
    } else {
      setCloseIcon(true);
    }
  }, [searchValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchValue("");
        setCloseIcon(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <Flex justifyContent="center" alignItems="center" ref={searchRef}>
      {width > breakpoints.xl ? (
        <>
          <Icon
            src="/assets/search_icon.png"
            alt="searchIcon"
            margin="0 0 0 5px"
          />
          <SearchBarInput
            padding=" 0 2px 0 10px"
            placeholder={t("Find Transaction")}
            placeholderColor={colors.placeholderGray}
            fontWeight="400"
            width="100%"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchBarCloseIcon
            src="/assets/close_icon.png"
            alt="closeIcon"
            active={closeIcon}
            onClick={() => {
              setSearchValue("");
              setCloseIcon(false);
            }}
          />
        </>
      ) : (
        <>
          <Flex
            position="relative"
            alignItems="center"
            padding="8px 24px 8px 10px"
            borderBottom={`1px solid ${colors.darkBlue}`}
          >
            <Icon
              src="/assets/blue_search_icon.png"
              alt="searchIcon"
              position="absolute"
              left="14px"
            />
            <SearchBarInput
              padding="8px 30px"
              placeholder={t("Find Transaction")}
              placeholderColor={colors.placeholderGray}
              fontWeight="400"
              width="100%"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchBarCloseIcon
              src="/assets/responsive_close_icon.png"
              alt="closeIcon"
              position="absolute"
              right="28px"
              active={closeIcon}
              onClick={() => {
                setSearchValue("");
                setCloseIcon(false);
              }}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default SearchBar;
