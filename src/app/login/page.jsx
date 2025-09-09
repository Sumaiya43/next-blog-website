"use client";

export const dynamic = "force-dynamic";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  const s = useSession();
  const data = s?.data;
  const status = s?.status;

  console.log(data, status);

  return (
    <div className={`${styles.loginContainer} ${styles.fullBleed}`}>
      <div className={styles.wrapper}>
        <div
          className={styles.socialButton}
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
