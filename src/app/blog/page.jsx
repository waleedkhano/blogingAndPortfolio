import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {

  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch")
    }
    return res.json();
  } catch (error) {
    throw error;
  }
}




async function Blog() {

  const data = await getData();

  return (
    <div className={styles.maincontainer}>
      {
        data.map((item) => (
          <Link key={item._id} href={`/blog/${item._id}`} className={styles.container} >
            <div className={styles.imgContainer}>
              <Image
                src={item.img}
                alt='blog-image'
                layout='responsive'
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        ))
      }

    </div>
  )
}

export default Blog