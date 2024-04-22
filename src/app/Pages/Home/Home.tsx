"use client";
import styles from "@/app/Pages/Home/Home.module.css";
import Image from "next/image";
export default function HomePrinc() {
  return (
    <div className={styles.navBarPrincipal}>
      <div className={styles.navBar}>
        <div className={styles.conteinerImg}>
          <div className={styles.imageWrapper}>
            <Image
              src={require("@/../../public/img/EllipseBlack.svg")}
              alt=""
              width={20}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={require("@/../../public/img/RectangleBlack.svg")}
              alt=""
              width={30}
            />
          </div>
        </div>
        <div className={styles.textNavbar}>
          <a href="">
            <h3 id={styles.homeText} className={styles.textList}>
              Home
            </h3>
          </a>
          <a href="">
            <h3 id={styles.checkList} className={styles.textList}>
              CheckList
            </h3>
          </a>
        </div>
      </div>

      <div className={styles.conteiner}>
        <div className={styles.conteinerOne}>

          <div className={styles.taskPage}>
            <h1 className={styles.textTaskListHome}>Task List</h1>
          </div>

          <div className={styles.conteinerHomeTask}>
            <div className={styles.pesq}>
              <Image
                src={require("@/../../public/img/adicionar.svg")}
                alt=""
                width={12}
                id={styles.adicionarImg}
              />
              <input type="text" id={styles.inputPesq} placeholder="Pesquise pela Task ....."/>
              <Image
                src={require("@/../../public/img/pesquisar.svg")}
                alt=""
                width={12}
                id={styles.pesqImg}
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
