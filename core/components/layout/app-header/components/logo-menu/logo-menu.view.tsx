import Logo from "@/public/assets/images/logo-menu.svg";
import Image from "next/image";

type PropTypes = {};
export default function LogoMenuView(props: PropTypes) {
  return <Image src={Logo} />;
}
