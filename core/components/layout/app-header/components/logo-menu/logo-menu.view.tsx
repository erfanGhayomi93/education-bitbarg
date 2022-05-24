import Logo from "@/public/assets/images/logo-menu.svg";
import Image from "next/image";
import Link from "next/link";

type PropTypes = {};
export default function LogoMenuView(props: PropTypes) {
  return (
    <Link href="/">
      <Image style={{ cursor: "pointer" }} src={Logo} />
    </Link>
  );
}
