import React from "react";

import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <b>Hi, Mazeda here!</b> Discover my stories and creative ideas
      </div>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            A blend of stories, code, and everyday inspiration
          </h1>
          <p className={styles.postDesc}>
            From cozy home moments to bold travel adventures, I share what I
            learn as a developer, a mom, and a curious human. Grab a tea, scroll
            slowly, and enjoy practical tips, honest reviews, and uplifting
            visuals.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
