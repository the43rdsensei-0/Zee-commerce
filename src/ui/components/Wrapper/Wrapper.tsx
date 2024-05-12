import styles from "./wrapper.module.css";

export default function Wrapper({
  top,
  right,
  bottom,
  left,
  children,
  height,
}: {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  children: JSX.Element;
  height: "screen" | "full";
}) {
  const style = {
    paddingTop: top,
    paddingRight: right,
    paddingBottom: bottom,
    paddingLeft: left,
    height: height === "screen" ? "100vh" : "100%",
  };
  return (
    <div className={styles.wrapper} style={style}>
      {children}
    </div>
  );
}
