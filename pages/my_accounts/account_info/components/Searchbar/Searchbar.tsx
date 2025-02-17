import React, { useEffect, useState } from "react";
import {
  SearchbarContainer,
  Input,
  SearchIcon,
  SearchCloseIcon,
} from "./Searchbar.styles";
import { useTranslation } from "next-i18next";
import { useFilter } from "../../context/FilterContext";
import useDebounce from "@/hooks/useDebounce";

const Searchbar: React.FC = () => {
  const [search, setSearch] = useState("");
  const { handleSearch } = useFilter();
  const debouncedSearch = useDebounce(search, 300);
  const [searchActive, setSearchActive] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    handleSearch(debouncedSearch);
  }, [debouncedSearch, handleSearch]);

  const handleSearchbarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearch(newValue);
    setSearchActive(newValue.length > 0);
  };

  const handleResetSearch = () => {
    setSearch("");
    setSearchActive(false);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <SearchbarContainer>
      <Input
        placeholder={t("Search")}
        value={search}
        onChange={(e) => {
          handleSearchbarChange(e);
        }}
      />
      <SearchIcon src="/assets/blue_search_icon.png" alt="searchIcon" />
      <SearchCloseIcon
        src="/assets/responsive_close_icon.png"
        alt="closeIcon"
        active={searchActive}
        onClick={() => {
          handleResetSearch();
        }}
      />
    </SearchbarContainer>
  );
};

export default Searchbar;
