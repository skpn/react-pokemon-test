import styles from "./RedComponent.module.css";

const RedComponent = () => (
  <div className={styles.coloredBackground}>
    <p className="text-color-white">white text in common index.css</p>
    <p className="text-color-white">red bg in local RedComponent.css</p>
  </div>
);

export default RedComponent;
