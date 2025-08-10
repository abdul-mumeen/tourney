"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { handleSignIn, handleSignOut } from "@/lib/auth";

export default function Home() {
  const { data: session } = useSession()
  console.log(process.env.NEXTAUTH_URL,"aux", process.env.GOOGLE_CLIENT_ID ,"term" )

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          {!session ? (
            <button
             style={ {
               padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              textAlign: "center",
              maxWidth: "300px",
              backgroundColor:"white",
              color:"black"
             }}
              className={styles.primary}
              onClick={handleSignIn}
            >
              
              {/* <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              /> */}
              Sign in with Google
            </button>
          ) : (
            <button
              className={styles.primary}
              onClick={handleSignOut}
                style={ {
               padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              textAlign: "center",
              maxWidth: "300px",
              backgroundColor:"white",
              color:"black"
             }}
            >
              Sign out
            </button>
          )}

          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>

        {session && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              textAlign: "center",
              maxWidth: "300px",
              backgroundColor:"white",
               color:"blue",
            }}
          >
            <Image
              src={session.user?.image || "/default-avatar.png"}
              alt="User Avatar"
              width={80}
              height={80}
              style={{ borderRadius: "50%",
                      
                       
               }}
            />
            <h3>{session.user?.name}</h3>
            <p>{session.user?.email}</p>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
