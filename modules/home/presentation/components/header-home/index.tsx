import HeaderHomeView from "./header-home.view";

type PropTypes = {
  postsCount: number;
  siteVisits: number;
};
export default function HeaderHomeComponent(props: PropTypes) {
  return <HeaderHomeView {...props} />;
}
