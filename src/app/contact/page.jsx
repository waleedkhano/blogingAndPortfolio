import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button';

function Contact() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Feel Free to Contact</h1>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <input type="text" placeholder='Name' className={styles.input} />
              <input type="text" placeholder='Email' className={styles.input} />
              <textarea className={styles.textarea} placeholder='Writes your Message' cols="30" rows="10"></textarea>
               <Button url="#" text="Send Message"/>
            </form>
          </div>
        </div>
  )
}

export default Contact;