"use client";
import styles from "@/app/Pages/Home/Home.module.css";
import Image from "next/image";
export default function HomePrinc() {
  return (
    <div className={styles.navBar}>
      <div className={styles.imageWrapper}>
        <Image
          src={require("@/../../public/img/EllipseBlack.svg")}
          alt=""
          width={50}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={require("@/../../public/img/RectangleBlack.svg")}
          alt=""
          width={65}
        />
      </div>
      <div className={styles.textNavbar}>
        <h3>Home</h3>
        <h3>CheckList</h3>
      </div>
    </div>
  );
}
