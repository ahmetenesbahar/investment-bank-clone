import React, { useState, useEffect, useRef } from "react";
import { SearchBarInput, SearchBarCloseIcon, Flex } from "@/styles/styles";

const SearchBar: React.FC = () => {
  const [closeIcon, setCloseIcon] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

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
    <Flex
      justifyContent="center"
      alignItems="center"
      padding="0 0 0 5px"
      ref={searchRef}
    >
      <img src="/assets/search_icon.png" alt="" />
      <SearchBarInput
        padding=" 0 2px 0 10px"
        placeholder="İşlem Ara..."
        placeholderColor="#ABABAB"
        fontWeight="400"
        width="350px"
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
    </Flex>
  );
};

export default SearchBar;
