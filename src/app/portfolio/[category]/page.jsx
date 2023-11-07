import React from 'react'
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';
import loPhoto from "/public/pracImg.jpg"


const Category = ({ params }) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}> 
          <Image className={styles.img} src={loPhoto} fill={true} alt=''/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}> 
          <Image className={styles.img} src={loPhoto} fill={true} alt=''/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}> 
          <Image className={styles.img} src={loPhoto} fill={true} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Category