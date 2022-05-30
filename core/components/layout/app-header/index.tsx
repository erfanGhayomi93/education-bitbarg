import AppHeaderView from "./app-header.view";
import { useState } from "react";
import { AppBarProps } from "@mui/material";
import useOpenLogin from "@/core/hooks/useOpenLogin";
import { useRouter } from "next/router";
import useUser from "@/modules/auth/domain/usecases/useUser";

type PropTypes = {
  children?: any;
  toolbarContent?: any;
  bgcolor?: string;
  elevation?: number;
  endLogo?: boolean;
  backHref?: string;
  title?: string;
  absoluteHref?: boolean;
} & AppBarProps;
export default function AppHeaderComponent(props: PropTypes) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useUser();
  const [announcementClosed, setAnnouncementClosed] = useState(false);
  const openLogin = useOpenLogin();
  const router = useRouter();

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  const closeAnnouncement = () => {
    setAnnouncementClosed(true);
    localStorage.setItem("announcementClosed", Date.now().toString());
  };

  const handleBack = (e: any) => {
    if (window?.history?.state?.idx) {
      e.preventDefault();
      router.back();
    }
  };
  if (router.query.application) return null;
  return (
    <AppHeaderView
      {...props}
      {...{
        handleBack,
        sidebarOpen,
        openSidebar,
        closeSidebar,
        user,
        openLogin,
        closeAnnouncement,
        announcementClosed,
      }}
    />
  );
}
