import styles from "./BlueComponent.module.css";

const BlueComponent = () => (
  <div className={styles.coloredBackground}>
    <p className="text-color-white">white text in common index.css</p>
    <p className="text-color-white">blue bg in local BlueComponent.css</p>
  </div>
);

export default BlueComponent;
