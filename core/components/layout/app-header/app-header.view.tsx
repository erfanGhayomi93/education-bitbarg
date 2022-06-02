import styles from "./app-header.module.scss";
import {
  AppBar,
  Toolbar,
  IconButton,
  AppBarProps,
  Container,
  Button,
  Divider,
  Skeleton,
  Typography,
  Box,
} from "@mui/material";
import AppSideBar from "@/core/components/layout/app-side-bar";
import {
  MenuDesktopIcon,
  MenuIcon,
  UserOutlineIcon,
} from "@/core/components/common/custom-icon";
import HEADER_LOGO from "@/public/assets/images/header-logo.svg";
import Image from "next/image";
import clsx from "clsx";
import { UserInterface } from "@/modules/auth/domain/entities/user";
import { ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import { ArrowForwardIos } from "@mui/icons-material";
import SearchInputComponent from "@/core/components/layout/search-input";

type PropTypes = {
  children?: any;
  toolbarContent?: any;
  bgcolor?: string;
  elevation?: number;
  sidebarOpen: boolean;
  loading?: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  user?: UserInterface;
  openLogin: () => void;
  endLogo?: boolean;
  closeAnnouncement: () => void;
  announcementClosed: boolean;
  backHref?: string;
  title?: string;
  handleBack: (e: any) => void;
  absoluteHref?: boolean;
} & AppBarProps;
export default function AppHeaderView(props: PropTypes) {
  const {
    children,
    toolbarContent,
    bgcolor,
    elevation,
    sidebarOpen,
    openSidebar,
    closeSidebar,
    user,
    openLogin,
    className,
    loading,
    endLogo,
    closeAnnouncement,
    announcementClosed,
    backHref,
    handleBack,
    title,
    absoluteHref,
    ...others
  } = props;

  const backButton = () => {
    if (!backHref) return null;
    const btnProps: any = {
      component: "a",
      size: "large",
      edge: "start",
      color: "inherit",
      sx: { mr: 0.5 },
    };
    if (!absoluteHref) {
      return (
        <Link href={backHref} passHref>
          <IconButton onClick={handleBack} {...btnProps}>
            <ArrowForwardIos />
          </IconButton>
        </Link>
      );
    }
    return (
      <IconButton href={backHref} {...btnProps}>
        <ArrowForwardIos />
      </IconButton>
    );
  };

  return (
    <ThemeProvider
      theme={(outerTheme: any) => ({
        ...outerTheme,
        palette: {
          ...outerTheme.palette,
          primary: {
            main: "#4285F2",
            light: "#4285f24d",
            lighter: "#4285F21A",
            contrastText: "#fff",
          },
        },
      })}
    >
      <Toolbar />
      <AppBar
        className={clsx(styles.appBar, className)}
        position="fixed"
        sx={{ bgcolor: bgcolor || "background.default" }}
        elevation={elevation || 0}
        {...others}
      >
        <Container>
          <Toolbar className="desktop-down" disableGutters>
            <Box display="flex" alignItems="center">
              {backButton()}
              {!!title && (
                <Typography component="h1" className={styles.headerTitle}>
                  {title}
                </Typography>
              )}
              {toolbarContent}
            </Box>
            <SearchInputComponent />
          </Toolbar>
          <Toolbar
            className={clsx(styles.desktopToolbar, "desktop-up")}
            disableGutters
          >
            <Button
              onClick={openSidebar}
              color="inherit"
              aria-label="menu"
              startIcon={<MenuDesktopIcon />}
            >
              منو
            </Button>
            <div className={styles.navbar}>
              <Button component="a" href="/" color="inherit">
                خانه
              </Button>
              <Button component="a" href="/live-price" color="inherit">
                قیمت لحظه‌ای
              </Button>

              {Boolean(user) && (
                <Button component="a" href="/orders" color="inherit">
                  سفارشات
                </Button>
              )}
              <Button component="a" href="/fee" color="inherit">
                کارمزدها
              </Button>

              <Button component="a" href="/portfolio" color="inherit">
                پورتفوی
              </Button>
            </div>

            <SearchInputComponent />

            <div className={styles.endSection}>
              {/* {typeof window === "undefined" || userLoading ? ( */}
              {loading ? (
                <Skeleton variant="rectangular" width={110} height={38} />
              ) : user ? (
                <Button
                  component="a"
                  href="/profile/account"
                  variant="containedLight"
                  startIcon={<UserOutlineIcon />}
                >
                  {user.fullName}
                </Button>
              ) : (
                <Button onClick={openLogin} variant="contained">
                  ورود / ثبت نام
                </Button>
              )}

              <Divider orientation="vertical" className={styles.divider} />

              <a href="/" className={styles.logoContainer}>
                <Image src={HEADER_LOGO} />
              </a>
            </div>
          </Toolbar>
        </Container>
        <AppSideBar open={sidebarOpen} onClose={closeSidebar} />
        {children}
      </AppBar>
    </ThemeProvider>
  );
}
