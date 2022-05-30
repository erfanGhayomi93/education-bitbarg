import useOpenLogin from "@/core/hooks/useOpenLogin";
import useUser from "@/modules/auth/domain/usecases/useUser";
import { useRouter } from "next/router";
import AppSideBarView from "./app-side-bar.view";
import { useMemo } from "react";

type PropTypes = {
  open: boolean;
  onClose: () => void;
};
export default function AppSideBarComponent(props: PropTypes) {
  // const { isDarkTheme } = useSelector((s) => s.app);
  const isDarkTheme = false;
  const { user } = useUser();
  const openLogin = useOpenLogin();
  // const toggleTheme = useToggleTheme();
  const toggleTheme = () => null;
  const router = useRouter();
  const isStandalone = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return !!(navigator as any).standalone;
  }, [typeof navigator === "undefined"]);

  return (
    <AppSideBarView
      {...props}
      {...{
        // logout,
        isDarkTheme,
        toggleTheme,
        pathname: router.pathname,
        openLogin,
        user,
        // appInitials,
        isStandalone,
      }}
    />
  );
}
