import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type PropTypes = {
  value: string;
  setvalue: any;
};
export default function SearchFieldView({ value, setvalue }: PropTypes) {
  return (
    <TextField
      fullWidth
      size="small"
      value={value}
      onChange={(e) => setvalue(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      id="filled-search"
      label="جستجو در آموزش‌ها...‍"
      variant="filled"
    />
  );
}
