import Link from "next/link";
import React from "react";
import styles from "./page.module.css"

const home = () => {
  return (
    <>
      <div className="center">
        Links to solutions:
        <div className={styles.buttonWrap}>
          <Link href="/wallet">
          <button>Wallet</button>
          </Link>
          <Link href="/current-time">
          <button>Current time</button>
          </Link>
          <Link href="/pair-finder">
          <button>Pair Finder</button>
          </Link>
          <Link href="/chars-counter">
          <button>Char counter</button>
          </Link>
          <Link href="/green-page">
          <button>Green shade</button>
          </Link>
          
         
          
        </div>
      </div>
    </>
  );
};

export default home;
