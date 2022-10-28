import Image from "next/image";
import Link from "next/link";
import React from "react"
import styles from "./Navbar.module.css"

export default function Navbar() {

  const routes = [
    {title: "Health tests", href: "/health-tests"},
    {title: "How it works", href: "/how-it-works"},
    {title: "About us", href: "/about-us"},
    {title: "Partners", href: "/partners"},
    {title: "Learn", href: "/learn"},
  ]

  return (
    <div className="flex bg-white text-black w-[100%] justify-between items-center min-h-[80px] px-4">
      <div className={`${styles.brand}`}>
        <Image src="/img/brand/Forth-black-LOGO.svg" width="200" height="100" alt="Forth with life" />
      </div>
      <div className={`${styles.menu} hidden md:flex w-[60%] justify-around content-center`}>
        {
          routes.map( ({title, href}, index) =>
            <Link key={index} href={href}>{title}</Link>
          )
        }
      </div>
      <div className={`${styles.others} flex items-center gap-4`}>
        <i className="fa-light fa-user fa-fw fa-lg"></i>
        <i className="fa-regular fa-cart-shopping fa-fw fa-lg"></i>
        <div className={`${styles.mobileMenu} flex flex-col md:hidden`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}