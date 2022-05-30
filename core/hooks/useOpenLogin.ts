export default function useOpenLogin() {
  return () => {
    window.location.href = `/users/login?back=${window.location.href}`;
  };
}
