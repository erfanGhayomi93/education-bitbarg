import HeaderHomeView from "./header-home.view";

type PropTypes = {
  postsCount: number;
  userCount: number;
};
export default function HeaderHomeComponent(props: PropTypes) {
  return <HeaderHomeView {...props} />;
}
