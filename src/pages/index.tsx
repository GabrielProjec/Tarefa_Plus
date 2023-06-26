import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

import heroImg from "../../public/assets/hero.png";
import { GetStaticProps } from "next";

import { db } from "../services/firebaseConnections";
import { collection, getDocs } from "firebase/firestore";

interface HomeProps {
  posts: number;
  comments: number;
}

export default function Home({ comments, posts }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Logo Tarefas+"
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organziar <br />
          seus estudos e tarefas
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>{posts} posts</span>
          </section>
          <section className={styles.box}>
            <span>{comments} comentarios</span>
          </section>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // buscar do banco os numeros e mandar para o component

  const commentRef = collection(db, "comments");
  const postRef = collection(db, "tarefas");

  const commentSnapshot = await getDocs(commentRef);
  const postSnapshot = await getDocs(postRef);
  return {
    props: {
      posts: postSnapshot.size || 0,
      comments: commentSnapshot.size || 0,
    },
    revalidate: 60, // sera veladidada a cada 60seg
  };
};
