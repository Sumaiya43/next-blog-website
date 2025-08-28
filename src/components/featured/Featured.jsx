import React from "react";

import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <b>Hi, Mazeda here!</b> Discover my stories and creative ideas.
      </div>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            explicabo.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            molestiae assumenda unde at ducimus facere eius saepe omnis
            exercitationem, totam dolores non sequi quis quaerat.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
