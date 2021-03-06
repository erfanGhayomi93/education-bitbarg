import styles from "./app-side-bar.module.scss";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Drawer,
  IconButton,
  Typography,
  Toolbar,
  Divider,
  ButtonBase,
  Avatar,
} from "@mui/material";
// import Link from "next/link";
import { Fragment, useMemo } from "react";
// import { currencyFormat } from "@/core/helpers";
import CloseIcon from "@mui/icons-material/Close";
import {
  AboutIcon,
  AdminMailIcon,
  BitgapIcon,
  CommentsIcon,
  FingerprintIcon,
  MoneyIcon,
  MenuOrdersIcon,
  WalletIcon,
  BasketIcon,
  DarkModeIcon,
  LightModeIcon,
  ThemeIcon,
  HomeIcon,
  ExitIcon,
  LivePriceIcon,
  RoadMapIcon,
} from "../../common/custom-icon";
import FaqIcon from "@mui/icons-material/LiveHelpOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import RulesIcon from "@mui/icons-material/FactCheckOutlined";
import CareersIcon from "@mui/icons-material/WorkOutline";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
import BugReportIcon from "@mui/icons-material/CampaignRounded";
// import AppMenuFooter from "@/core/components/layouts/app-menu-footer";
import { UserInterface } from "@/modules/auth/domain/entities/user";
import LoginBoxComponent from "@/modules/auth/presentation/components/login-box";
import clsx from "clsx";
import Image from "next/image";
import MENU_LOGO from "@/public/assets/images/menu-logo.svg";
import DOWNLOAD_APP from "@/public/assets/images/download-app-.png";
// import { AppInitialsInterface } from "@/modules/_app/domain/entities/appInitials";
// import { KycStatus } from "@/core/enums/kyc.enums";
import useToken from "@/core/hooks/useToken";

type PropTypes = {
  open: boolean;
  onClose: () => void;
  isDarkTheme: boolean;
  toggleTheme: () => void;
  logout?: () => void;
  user?: UserInterface;
  pathname: string;
  openLogin: () => void;
  // appInitials?: AppInitialsInterface;
  isStandalone: boolean;
};
export default function AppSideBarView(props: PropTypes) {
  const {
    open,
    onClose,
    isDarkTheme,
    toggleTheme,
    user,
    logout,
    pathname,
    openLogin,
    // appInitials,
    isStandalone,
  } = props;

  const { token } = useToken();
  const bitgapHref = useMemo(() => {
    if (token) return "/bitgap/authentication?token=" + token;
    return "/bitgap";
  }, [token]);
  const menuItems: any[] = useMemo(() => {
    const {
      home,
      // news,
      assets,
      livePrice,
      orders,
      wallet,
      authentication,

      fee,
      howToCreateWallet,
      bugReport,
      careers,

      contactManager,
      usersComments,
      bitgap,
      roadMap,
      rules,
      aboutUs,
      faq,

      divider,

      // theme,
    } = {
      home: {
        primary: "????????",
        icon: HomeIcon,
        href: "/",
      },
      // news: {
      //   primary: "?????? ????????",
      //   secondary: () => (
      //     <Typography>
      //       <span className="online-dot warning" />
      //       {/* {currencyFormat(appInitials?.bitgapUserOnline)} */}
      //       {/* ?????? */}
      //     </Typography>
      //   ),
      //   icon: NewspaperIcon,
      //   href: '/news',
      //   outerLink: true,
      // },
      assets: {
        primary: "??????????????",
        icon: BasketIcon,
        href: "/portfolio",
      },
      livePrice: {
        primary: "???????? ???????? ????",
        // secondary: () => (
        //   <Typography>
        //     {currencyFormat(appInitials?.currencyCount)} ?????? ??????????????
        //   </Typography>
        // ),
        icon: LivePriceIcon,
        href: "/live-price",
      },
      wallet: {
        primary: "?????? ?????? ??????????",
        secondary: () =>
          user ? null : ( // ) : //   </Typography> //     {currencyFormat(appInitials?.user.availableBalance, "??????????")} //   <Typography color="success.main"> // appInitials?.user.availableBalance ? (
            <Typography color="secondary">???????? ???????? ????????</Typography>
          ),
        icon: WalletIcon,
        ...(user ? { href: "/profile/wallet" } : { onClick: openLogin }),
      },
      authentication: {
        primary: "?????????? ????????",
        // secondary: () => {
        //   switch (appInitials?.user.kycStatus) {
        //     case KycStatus.Accepted:
        //       return <Typography color="success.main">?????????? ??????</Typography>;
        //     case KycStatus.NotAccepted:
        //       return <Typography color="error.main">?????????? ????????</Typography>;
        //     case KycStatus.Rejected:
        //       return <Typography color="error.main">???? ??????</Typography>;
        //     default:
        //       return (
        //         <Typography color="warning.main">???? ???????????? ??????????</Typography>
        //       );
        //   }
        // },
        icon: FingerprintIcon,
        href: "/kyc",
      },

      orders: {
        primary: "??????????????",
        href: "/orders",
        icon: MenuOrdersIcon,
      },
      bitgap: {
        primary: "?????? ????",
        secondary: () => (
          <Typography>
            <span className="online-dot" />
            {/* {currencyFormat(appInitials?.bitgapUserOnline)} */}
            {/* ?????? */}
            ????????????
          </Typography>
        ),
        icon: BitgapIcon,
        href: bitgapHref,
        outerLink: true,
      },
      fee: {
        primary: "????????????????",
        icon: MoneyIcon,
        href: "/fee",
      },
      bugReport: {
        primary: "?????????? ??????",
        icon: BugReportIcon,
        href: "/bug-report",
      },
      howToCreateWallet: {
        primary: "?????????? ???????? ?????? ??????",
        icon: SchoolOutlinedIcon,
        href: "/how-to-create-wallet",
      },
      contactManager: {
        primary: "???????????? ???? ????????????",
        icon: AdminMailIcon,
        href: "/contact-manager",
      },
      careers: {
        primary: "???????? ?????? ????????",
        icon: CareersIcon,
        href: "/careers",
        // href: "https://jobinja.ir/companies/bitbarg/jobs",
        // target: "_blank",
        // rel: "noreferrer noopener",
      },
      usersComments: {
        primary: "?????????? ??????????????",
        icon: CommentsIcon,
        href: "/users-comments",
      },
      // theme: {
      //   primary: isDarkTheme ? "?????????? ???? ???????? ????????" : "?????????? ???? ???????? ????????",
      //   icon: ThemeIcon,
      //   secondary: () => (
      //     <ListItemIcon sx={{ minWidth: 0 }}>
      //       {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
      //     </ListItemIcon>
      //   ),
      //   onClick: toggleTheme,
      // },
      aboutUs: {
        primary: "???????????? ????",
        icon: AboutIcon,
        href: "/about-us",
      },
      roadMap: {
        primary: "???????? ?????? ??????",
        icon: RoadMapIcon,
        href: "/roadmap",
      },
      faq: {
        primary: "???????????? ????????????",
        icon: FaqIcon,
        href: "/faq",
      },
      rules: {
        primary: "???????????? ?? ????????????",
        icon: RulesIcon,
        href: "/terms-of-service",
      },
      divider: { divider: true },
    };
    if (user) {
      return [
        home,
        // news,
        assets,
        livePrice,
        orders,
        wallet,
        authentication,
        // theme,
        divider,

        fee,
        howToCreateWallet,
        bugReport,
        careers,
        divider,

        contactManager,
        usersComments,
        bitgap,
        roadMap,
        faq,
        rules,
        aboutUs,
      ];
    }
    return [
      home,
      // news,
      assets,
      livePrice,
      wallet,
      // theme,
      divider,

      fee,
      howToCreateWallet,
      bugReport,
      careers,
      divider,

      contactManager,
      usersComments,
      bitgap,
      roadMap,
      faq,
      rules,
      aboutUs,
    ];
  }, [
    isDarkTheme,
    toggleTheme,
    user,
    bitgapHref,
    // appInitials,
  ]);

  return (
    <Drawer
      onClose={onClose}
      open={open}
      PaperProps={{
        className: styles.paper,
        sx: { bgcolor: "background.secondary" },
      }}
    >
      <div className={styles.sidebar}>
        <Toolbar>
          <IconButton
            onClick={onClose}
            edge="end"
            size="large"
            sx={{ ml: "auto" }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>

        <div className={clsx(styles.logoContainer, "mobile-up")}>
          <Image src={MENU_LOGO} />
        </div>
        {Boolean(user) && (
          <a
            href="/profile/account"
            onClick={onClose}
            className={clsx(styles.miniProfile, "mobile-down")}
          >
            {user && (
              <Avatar className={styles.avatar}>
                <Image src={user!.avatar} width={55} height={55} />
              </Avatar>
            )}
            <div>
              <Typography fontWeight={500} variant="h6">
                {user!.fullName}
              </Typography>
              <Typography>?????? ??????????</Typography>
            </div>
          </a>
        )}
        <Box className="mobile-down" sx={{ px: 1.5 }}>
          {Boolean(!user) && <LoginBoxComponent />}
        </Box>
        {!isStandalone && (
          <Box sx={{ px: 1.5, pb: 4 }}>
            <ButtonBase
              href="/download-app"
              component="a"
              className={styles.downloadApp}
            >
              <Image src={DOWNLOAD_APP} />
            </ButtonBase>
          </Box>
        )}
        <List className={styles.sidebarList} dense>
          {menuItems.map(
            (
              {
                icon: Icon,
                primary,
                secondary,
                href,
                onClick,
                divider,
                outerLink,
                ...other
              },
              idx
            ) => {
              if (divider)
                return <Divider key={idx} className={styles.divider} />;

              return (
                <ListItem
                  key={idx}
                  component={href ? "a" : "li"}
                  href={href}
                  className={clsx({
                    [styles.listItem]: true,
                    [styles.selected]: href === pathname,
                  })}
                  disablePadding
                  {...other}
                >
                  <ListItemButton
                    onClick={onClick || onClose}
                    className={styles.listItemButton}
                  >
                    <ListItemIcon className={styles.listItemIcon}>
                      <Icon />
                    </ListItemIcon>
                    <Typography sx={{ flexGrow: 1 }}>{primary}</Typography>
                    {secondary ? secondary() : null}
                  </ListItemButton>
                </ListItem>
              );
            }
          )}

          {Boolean(user && logout) && (
            <>
              <ListItem className={styles.listItem} disablePadding>
                <ListItemButton
                  onClick={logout}
                  className={styles.listItemButton}
                >
                  <ListItemIcon className={styles.listItemIcon}>
                    <ExitIcon color="error" />
                  </ListItemIcon>
                  <Typography color="error.main" sx={{ flexGrow: 1 }}>
                    ???????? ???? ???????? ????????????
                  </Typography>
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>

        {/* <AppMenuFooter className="mobile-down" /> */}
      </div>
    </Drawer>
  );
}
