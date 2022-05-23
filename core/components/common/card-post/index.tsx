import { POst } from "@/modules/home/domain/entities/home";
import CardPostComponentView from "./card-post.view";

type PropTypes = {
  data: POst;
};
export default function CardPostComponent({ data }: PropTypes) {
  return <CardPostComponentView data={data} />;
}
