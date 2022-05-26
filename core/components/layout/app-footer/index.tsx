import { getCategoriesList } from "@/modules/app/data/usecases";
import AppFooterView from "./app-footer.view";

type PropTypes = {};
export default function AppFooterComponent(props: PropTypes) {
  const { data } = getCategoriesList();

  return <AppFooterView dataCategory={data} />;
}
