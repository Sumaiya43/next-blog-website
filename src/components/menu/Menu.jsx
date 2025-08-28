import React from "react";

import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>{"What's hot?"}</h2>
      <h1 className={styles.Title}>Most Popular</h1>
      <MenuPosts withImage={false}/>
    

      <h2 className={styles.subTitle}>Discover by topic</h2>
      <h1 className={styles.Title}>Categories</h1>
      <MenuCategories/>

      <h2 className={styles.subTitle}>Choosen by the editor</h2>
      <h1 className={styles.Title}>Editors Pick</h1>
      <MenuPosts withImage={true}/>
    </div>
  );
};

export default Menu;
