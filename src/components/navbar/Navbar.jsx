"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './page.module.css'
import DarkMode from '../DarkMode/DarkMode';
import { signOut, useSession } from 'next-auth/react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';


const Navbar = () => {

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  const session = useSession();
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle)
  }

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>Wa<span>L</span>eed</Link>
      <div className={styles.links}>
        <DarkMode />
        <div className={styles.mobileIcon}>
          <FaBarsStaggered size={20} className={styles.bar} onClick={toggleHandler} />
          <RxCross2 size={25} className={`${styles.cross} ${toggle ? styles.crossActive : ''}`} onClick={toggleHandler} />
        </div>
        <div className={`${styles.linkData} ${toggle ? styles.active : ''}`}>
          {
            links.map((e) => (
              <Link key={e.id} href={e.url} onClick={toggleHandler} className={styles.link}>
                {e.title}
              </Link>
            ))
          }
          {
            session.status === "authenticated" && (
              <button className={styles.logout}
                onClick={signOut}>
                Logout
              </button>
            )}
        </div>
      </div>
    </div>
  )
}

export default Navbar