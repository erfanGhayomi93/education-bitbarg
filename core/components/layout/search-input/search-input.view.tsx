import {
  getLocalStorageUser,
  removeItemLocalStorage,
} from "@/modules/auth/domain/usecases/useUser";
import { POst } from "@/modules/home/domain/entities/home";
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
import Link from "next/link";
import { useCallback } from "react";
import { SearchIcon } from "../../common/custom-icon";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./search-input.module.scss";

type PropTypes = {
  inputValue: string;
  searchText: string;
  setInputValue: (value: string) => void;
  setOpen: (value: boolean) => void;
  open: boolean;
  searchData: any;
  handleClickAsSetOldSearches: () => void;
};
export default function SearchInputView({
  inputValue,
  searchText,
  setInputValue,
  setOpen,
  open,
  searchData,
  handleClickAsSetOldSearches,
}: PropTypes) {
  const uiOldSearches = useCallback(() => {
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
                onClick={() => setInputValue(item)}
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
  }, [searchText]);

  const resultSearch = useCallback(() => {
    const items = searchData?.result?.items;

    if (items?.length) {
      return (
        <Box className={styles.popup} onClick={handleClickAsSetOldSearches}>
          {items.slice(0, 4).map((item: POst) => (
            <Link
              key={item.id}
              href="/video/[id]"
              as={`/video/${item.enTitle}`}
              passHref
            >
              <div className={styles.box}>
                <Box>
                  <img className={styles.image} src={item.image} />
                </Box>
                <Box className={styles.content}>
                  <Typography variant="body1" className={styles.description}>
                    {item.faTitle}
                  </Typography>
                  <Chip label={item.category} variant="filled" color="info" />
                </Box>
              </div>
            </Link>
          ))}
          {items.length > 4 && (
            <div className={styles.more}>
              <Link href="/search/[key]" as={`/search/${searchText}`}>
                <Button
                  size="small"
                  fullWidth
                  color="inherit"
                  variant="outlined"
                >
                  همه نتایج
                </Button>
              </Link>
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
          onChange={(e: any) => setInputValue(e.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            setTimeout(() => {
              setOpen(false);
            }, 500);
          }}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     refInput.current.click();
          //   }
          // }}
          endAdornment={
            <InputAdornment position="end">
              {searchText ? (
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => setInputValue("")}
                >
                  <ClearIcon className={styles.searchIcon} />
                </IconButton>
              ) : (
                <Link
                  href="/search/[type]/[key]"
                  as={`/search/key/${searchText ? searchText : null}`}
                  passHref
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <SearchIcon className={styles.searchIcon} />
                  </IconButton>
                </Link>
              )}
            </InputAdornment>
          }
          label="جستجو در آموزش‌ها..."
          fullWidth
          autoComplete="off"
        />
      </FormControl>
      {open && uiOldSearches()}
      {resultSearch()}
    </div>
  );
}
