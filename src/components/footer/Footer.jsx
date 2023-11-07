import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>@2023 developed by waleed Khano. All rights reserved</div>
      <div className={styles.social}>
        <BsFacebook size={20}/>
        <BsGithub size={20}/>
        <BsLinkedin size={20}/>
      </div>
    </div>
  )
}

export default Footer