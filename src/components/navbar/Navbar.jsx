"use client"
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import DarkMode from '../DarkMode/DarkMode';
import { signOut, useSession } from 'next-auth/react';

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

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>Wa<span>L</span>eed</Link>
      <div className={styles.links}>
        <DarkMode/>
        {
          links.map((e)=>(
            <Link key={e.id} href={e.url} className={styles.link}>
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
  )
}

export default Navbar