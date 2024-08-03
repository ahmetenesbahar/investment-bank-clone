import React, { useState, useEffect, useRef } from "react";
import {
  SearchBarInput,
  SearchBarCloseIcon,
  Flex,
  Icon,
} from "@/styles/styles";
import useMediaQuery from "@/hooks/useMediaQuery";

const SearchBar: React.FC = () => {
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
      {width > 1280 ? (
        <>
          <Icon src="/assets/search_icon.png" alt="" margin="0 0 0 5px" />
          <SearchBarInput
            padding=" 0 2px 0 10px"
            placeholder="İşlem Ara..."
            placeholderColor="#ABABAB"
            fontWeight="400"
            width="100%"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchBarCloseIcon
            src="/assets/close_icon.png"
            alt=""
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
            borderBottom="1px solid #10213c"
          >
            <Icon
              src="/assets/blue_search_icon.png"
              alt=""
              position="absolute"
              left="14px"
            />
            <SearchBarInput
              padding="8px 30px"
              placeholder="İşlem Ara..."
              placeholderColor="#ABABAB"
              fontWeight="400"
              width="100%"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchBarCloseIcon
              src="/assets/responsive_close_icon.png"
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
