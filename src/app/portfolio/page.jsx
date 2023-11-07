import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Choose</h1>
      <div className={styles.items}>
        <Link href="portfolio" className={styles.item}>
          <span className={styles.title}>Photos</span>
        </Link>
        <Link href="portfolio" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="portfolio" className={styles.item}>
          <span className={styles.title}>Design</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio