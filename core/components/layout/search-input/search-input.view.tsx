import {
  getLocalStorageUser,
  removeItemLocalStorage,
} from "@/modules/auth/domain/usecases/useUser";
import { POst } from "@/modules/home/domain/entities/home";
import { PopperUnstyled } from "@mui/base";
import {
  Box,
  Button,
  Chip,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { SearchIcon } from "../../common/custom-icon";
import styles from "./search-input.module.scss";

type PropTypes = {
  inputValue: string;
  searchText: string;
  setInputValue: (value: string) => void;
  setSearchText: (value: string) => void;
  setOpen: (value: boolean) => void;
  open: boolean;
  handleClickSearch: (event: React.MouseEvent<HTMLElement>) => void;
  searchData: any;
};
export default function SearchInputView({
  inputValue,
  searchText,
  setInputValue,
  setSearchText,
  setOpen,
  open,
  handleClickSearch,
  searchData,
}: PropTypes) {
  const clickSearch = useRef<any>();

  const uiOldSearches = () => {
    const oldSearches = getLocalStorageUser("oldSearches");
    if (oldSearches && !searchText) {
      return (
        <Box className={styles.popup}>
          <Typography className={styles.title} variant="body1">
            سوابق جستجو
          </Typography>
          <div className={styles.oldSearches}>
            {oldSearches.slice(0, 4).map((item: string, ind: number) => (
              <Chip
                key={ind}
                label={item}
                variant="outlined"
                color="info"
                clickable
                className={styles.chip}
              />
            ))}
          </div>
          <Button
            variant="text"
            color="success"
            onClick={() => {
              removeItemLocalStorage("oldSearches");
              setOpen(false);
            }}
          >
            پاک کردن سوابق جستجو
          </Button>
        </Box>
      );
    }
    return null;
  };

  const resultSearch = useCallback(() => {
    const items = searchData?.result?.items;
    if (items?.length) {
      return (
        <Box className={styles.popup}>
          {items.map((item: POst) => (
            <Link
              key={item.id}
              href="/video/[id]"
              as={`/video/${item.enTitle}`}
            >
              <div className={styles.box}>
                <img className={styles.image} src={item.image} />
                <Box className={styles.content}>
                  <Typography variant="body1" className={styles.description}>
                    {item.faTitle}
                  </Typography>
                  <Chip label={item.category} variant="filled" color="info" />
                </Box>
              </div>
            </Link>
          ))}
          {items.length > 1 && (
            <div className={styles.more}>
              <Button fullWidth color="inherit" variant="outlined">
                همه نتایج
              </Button>
            </div>
          )}
        </Box>
      );
    }
    return null;
  }, [searchData]);

  return (
    <div className={styles.boxControl}>
      <FormControl className={styles.formControl} variant="outlined">
        <InputLabel htmlFor="search-input">جستجو در آموزش‌ها...</InputLabel>
        <OutlinedInput
          id="search-input"
          value={inputValue}
          className={styles.inputText}
          onKeyDown={(e: any) => {
            if (e.keyCode === 13) {
              clickSearch.current.click();
            }
          }}
          onChange={(e: any) => {
            setInputValue(e.target.value);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            setTimeout(() => {
              setOpen(false);
            }, 500);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                ref={clickSearch}
                aria-label="toggle password visibility"
                onClick={handleClickSearch}
                edge="end"
              >
                <SearchIcon className={styles.searchIcon} />
              </IconButton>
            </InputAdornment>
          }
          label="جستجو در آموزش‌ها..."
          fullWidth
          autoComplete="off"
        />
      </FormControl>
      {open && uiOldSearches()}
      {open && resultSearch()}
    </div>
  );
}
