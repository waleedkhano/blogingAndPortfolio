import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import Main from "public/main.png"
import Button from '@/components/button/Button';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Created through lasted technologies</h1>
        <p className={styles.desc}>Extended kindness trifling remember he confined outlived if. Assistance sentiments yet unpleasing say. </p>
        <Button text="Show Work" url="/portfolio"/>
      </div>
      <div className={styles.item}>
        <Image src={Main} layout="responsive" className={styles.img} alt='frontImage'/> 
      </div>
    </div>
  )
}


export default Home; 