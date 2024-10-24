import Image from "next/image";
import styles from "./postCard.module.css";
import React from 'react'
import Link from "next/link";


export default function postCard() {
  return (
      <div className={styles.container}>
          <div className={styles.top}>
              <div className={styles.imgContainer}>
                  <Image src="https://images.pexels.com/photos/28871575/pexels-photo-28871575/free-photo-of-scenic-view-of-lush-green-landscape-with-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className={styles.img} />
              </div>
              <span className={styles.date}>01.01.2024</span>
          </div>
          <div className={styles.bottom}>
              <h1 className={styles.title}>Title</h1>
              <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa omnis cumque quae voluptas ipsum voluptatum expedita? Magni, sunt possimus cum explicabo, enim veniam adipisci vel, nesciunt doloribus itaque harum.</p>
              <Link className={styles.link} href="/blog/post">Read More</Link>
          </div>
    </div>
  )
}
