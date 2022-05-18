import { ITemMenu } from "../../app-header.view";
import MenuResponsiveView from "./menu-responsive.view";

type PropTypes = {
  data: ITemMenu[];
};
export default function MenuResponsiveComponent({ data }: PropTypes) {
  return <MenuResponsiveView data={data} />;
}
