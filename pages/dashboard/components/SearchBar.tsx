import React, { useState, useEffect, useRef } from "react";
import {
  SearchBarInput,
  SearchBarCloseIcon,
  Flex,
  Icon,
  CenteredFlex,
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
    <CenteredFlex ref={searchRef}>
      {width > breakpoints.xl ? (
        <>
          <Icon
            src="/assets/search_icon.png"
            alt="searchIcon"
            margin="0 0 0 0.313rem"
          />
          <SearchBarInput
            padding=" 0 0.125rem 0 0.625rem"
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
            padding="0.5rem 1.5rem 0.5rem 0.625rem"
            borderBottom={`0.063rem solid ${colors.darkBlue}`}
          >
            <Icon
              src="/assets/blue_search_icon.png"
              alt="searchIcon"
              position="absolute"
              left="0.875rem"
            />
            <SearchBarInput
              padding="0.5rem 1.875rem"
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
              right="1.75rem"
              active={closeIcon}
              onClick={() => {
                setSearchValue("");
                setCloseIcon(false);
              }}
            />
          </Flex>
        </>
      )}
    </CenteredFlex>
  );
};

export default SearchBar;
