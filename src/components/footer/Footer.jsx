import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>@2023 developed by waleed Khano. All rights reserved</div>
      <div className={styles.social}>
        <Image src="/facebook.png" width={20} height={20} className={styles.icon} alt='waleed'/>
        <Image src="/github.png" width={20} height={20} className={styles.icon} alt='waleed'/>
        <Image src="/linkedin.png" width={20} height={20} className={styles.icon} alt='waleed'/>
      </div>
    </div>
  )
}

export default Footer