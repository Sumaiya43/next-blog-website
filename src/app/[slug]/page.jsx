import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Deo</span>
              <span className={styles.date}>02.12.2025</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              fugit sed fuga at itaque molestiae velit odit consequatur possimus
              architecto?
            </p>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, sit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              fuga possimus deleniti eos, tempore blanditiis accusamus velit
              autem, quis dolor officia sint architecto doloremque laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              repellendus minima magni excepturi, maiores est qui exercitationem
              voluptatem quisquam id, dolorem rem illo, magnam aspernatur?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
