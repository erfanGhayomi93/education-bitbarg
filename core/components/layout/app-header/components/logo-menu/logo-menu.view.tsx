import Logo from "@/public/assets/images/logo-menu.svg";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type PropTypes = {};
export default function LogoMenuView(props: PropTypes) {
  return (
    <Link href="/" passHref>
      <Typography component="a">
        <Image style={{ cursor: "pointer" }} src={Logo} />
      </Typography>
    </Link>
  );
}
