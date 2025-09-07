import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>01.02.2025 </span>
          <span className={styles.category}>{item.title}</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quidem
          atque distinctio laudantium consequatur ipsam est dolore? Voluptates
          quibusdam nulla libero, alias quod fugiat, iusto possimus, obcaecati
          dicta officia non!
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
