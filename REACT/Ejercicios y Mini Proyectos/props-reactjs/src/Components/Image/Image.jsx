import React from "react";
import styles from "./Image.module.css";

const Image = ({ src, alt, width, height }) => {
  return (
    <figure>
      src={src}
      alt={Description}
      width={width}
      height={height}
      className={styles.image}
    </figure>
  );
};

export default Image;
