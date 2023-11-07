import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import randomImg from '/public/pracImg.jpg'

const getData = async (id) => {
  const res = await fetch(`${process.env.URL}/api/posts/${id}`,{
    cache: "no-store",
  });
   return res.json();
}

export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}


const BlogPost = async ({ params }) => {
  const {id} = params
  const data = await getData(id)


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
            </h1>
            <p className={styles.desc}>
              {data.desc}
            </p>
            <div className={styles.author}>
              <Image
              src={randomImg}
              alt='author-image'
              width={40}
              height={40}
              className={styles.avatar}
              />
              <span className={styles.username}>{data.username}</span>
            </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
          src={data.img}
          alt='blog-image'
          fill={true}
          className={styles.image}
          />
        </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            {data.content}
          </p>
      </div>
      
    </div>
  )
}

export default BlogPost