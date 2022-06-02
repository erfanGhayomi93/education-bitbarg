import useDebouncedState from "@/core/hooks/useDebouncedState";
import { getSearchKey } from "@/modules/app/data/usecases";
import { getLocalStorageUser } from "@/modules/auth/domain/usecases/useUser";
import { useState } from "react";
import SearchInputView from "./search-input.view";

type PropTypes = {};
export default function SearchInputComponent(props: PropTypes) {
  const [inputValue, searchText, setInputValue, setSearchText] =
    useDebouncedState("");
  const { data: searchData } = getSearchKey(searchText);
  const [open, setOpen] = useState(false);

  const handleClickAsSetOldSearches = () => {
    setInputValue("");
    try {
      let NewSearches: string[] = [];
      const oldSearches = getLocalStorageUser("oldSearches");

      if (!oldSearches) {
        NewSearches = [inputValue];
      } else if (oldSearches?.includes(inputValue.trim())) {
        return;
      } else {
        NewSearches = [inputValue, ...oldSearches.splice(0, 3)];
      }

      localStorage.setItem("oldSearches", JSON.stringify(NewSearches));
    } catch {}
  };

  return (
    <SearchInputView
      {...{
        inputValue,
        searchText,
        setInputValue,
        open,
        setOpen,
        searchData,
        handleClickAsSetOldSearches,
      }}
    />
  );
}
