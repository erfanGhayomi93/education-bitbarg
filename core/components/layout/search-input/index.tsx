import useDebouncedState from "@/core/hooks/useDebouncedState";
import { getSearchKey } from "@/modules/app/data/usecases";
import { useEffect, useState } from "react";
import SearchInputView from "./search-input.view";

type PropTypes = {};
export default function SearchInputComponent(props: PropTypes) {
  const [inputValue, searchText, setInputValue, setSearchText] =
    useDebouncedState("");
  const { data: searchData } = getSearchKey(searchText);

  const [open, setOpen] = useState(false);

  const handleClickSearch = (event: React.MouseEvent<HTMLElement>) => {
    alert(searchText);
  };

  useEffect(() => {
    console.log("searchData", searchData);
  }, [searchData]);

  return (
    <SearchInputView
      {...{
        inputValue,
        searchText,
        setInputValue,
        setSearchText,
        open,
        setOpen,
        handleClickSearch,
        searchData,
      }}
    />
  );
}
