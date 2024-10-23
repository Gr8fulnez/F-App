import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css";


export default function AboutPage() {
  return (
    <div className={styles.imgContainer}>

    {/* <Image src="/about.png" alt='' fill /> */}
      <Image src="https://images.pexels.com/photos/28871575/pexels-photo-28871575/free-photo-of-scenic-view-of-lush-green-landscape-with-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill />
    </div>
  )
}
