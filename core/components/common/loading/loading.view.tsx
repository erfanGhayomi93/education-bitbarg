import styles from "./loading.module.scss";
import clsx from "clsx";

type PropTypes = {
  initialized: boolean;
};
export default function LoadingView(props: PropTypes) {
  return (
    <div
      className={clsx({
        [styles.root]: true,
        [styles.loaded]: props.initialized,
      })}
      style={{
        background: "#fff",
        position: "fixed",
        zIndex: 1000000,
        inset: "-50%",
        transition: "all 500ms ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.loadingElement}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function LoadingElement() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingElement}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
