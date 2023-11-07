"use client";
import styles from "./page.module.css"
import { signIn, useSession } from 'next-auth/react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from 'react'

const Login = () => {

  const session = useSession()
  const router = useRouter()

  if(session.status === "loading"){
    return <p>Loading...</p>
  }

  if(session.status === "authenticated"){
    router?.push("/dashboard")
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email, password})
    
    }
  

  return (
    <div className={styles.container}>
       <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' className={styles.input} required />
        <input type="password" placeholder='Password' className={styles.input} required />
        <button className={styles.button} type='submit'>Login</button>
      </form>
      <button className={styles.button + " " + styles.google} onClick={() => signIn("google")}>Login with google</button>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  )
}

export default Login