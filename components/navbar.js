"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles["nav-items"]}>
        <Link href="/">
          <button className={`${styles["nav-button"]} ${styles["home-button"]} ${pathname === "/"}`}>
            Home
          </button>
        </Link>
        <Link href="/hall_of_fame">
          <button
            className={`${styles["nav-button"]} ${
              pathname === "/hall_of_fame" ? styles.active : ""
            }`}
          >
            ⭐ Hall Of Fame ⭐
          </button>
        </Link>
        <Link href="/course_staff">
          <button
            className={`${styles["nav-button"]} ${
              pathname === "/course_staff" ? styles.active : ""
            }`}
          >
            Course Staff
          </button>
        </Link>
        <Link href="/leaderboard">
          <button
            className={`${styles["nav-button"]} ${
              pathname === "/leaderboard" ? styles.active : ""
            }`}
          >
            Leaderboard
          </button>
        </Link>
        <Link href="/timeline">
          <button
            className={`${styles["nav-button"]} ${
              pathname === "/timeline" ? styles.active : ""
            }`}
          >
            Timeline
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
