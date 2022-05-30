import useOpenLogin from "@/core/hooks/useOpenLogin";
import LoginBoxView from "./login-box.view";

type PropTypes = {};
export default function LoginBoxComponent(props: PropTypes) {
  // const { isDarkTheme } = useSelector((s) => s.app);
  const isDarkTheme = false;
  const openLogin = useOpenLogin();

  return <LoginBoxView {...{ isDarkTheme, openLogin }} />;
}
