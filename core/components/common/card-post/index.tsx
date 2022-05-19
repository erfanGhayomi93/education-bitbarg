import { POst } from "@/modules/home/presentation/pages/home/home.view";
import CardPostComponentView from "./card-post.view";

type PropTypes = {
  data: POst;
};
export default function CardPostComponent({ data }: PropTypes) {
  return <CardPostComponentView data={data} />;
}
