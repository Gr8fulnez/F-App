"use client";

import React from 'react'
import styles from './navLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ item }) {
    const pathName = usePathname();

  return (
      <Link href={item.path} key={item.title}
          className={`${styles.container}
           ${pathName === item.path && styles.active}`}>
          {item.title}
      </Link>
  )
}
