import SearchFieldView from "./search-field.view";

type PropTypes = {
  value: string;
  setvalue: any;
};
export default function SearchFieldComponent({ value, setvalue }: PropTypes) {
  return <SearchFieldView value={value} setvalue={setvalue} />;
}
