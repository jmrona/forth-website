import React from "react"
import Head from "next/head";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import styles from "./Layout.module.css"

export default function Layout({children}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Forth | Private Home Blood Tests & Health Checks | From £39</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Keep track of your health with Forth home blood tests, starting from £39. Analysed at UKAS accredited labs by GPs. 10% off your first order. Results in 2 working days." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Forth | Private Home Blood Tests &amp; Health Checks | From £39"/>
        <meta property="og:description" content="Keep track of your health with Forth home blood tests, starting from £39. Analysed at UKAS accredited labs by GPs. 10% off your first order. Results in 2 working days."/>
        <meta property="og:url" content="https://www.forthwithlife.co.uk/"/>
        <meta property="og:updated_time" content="2022-10-27T11:23:44+01:00"/>
        <meta property="og:updated_time" content="2022-10-27T11:23:44+01:00"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Forth | Private Home Blood Tests &amp; Health Checks | From £39"/>
        <meta name="twitter:description" content="Keep track of your health with Forth home blood tests, starting from £39. Analysed at UKAS accredited labs by GPs. 10% off your first order. Results in 2 working days."/>
        <meta name="twitter:site" content="@forthwithlife"/>
        <meta name="twitter:creator" content="@forthwithlife"/>
        <meta name="twitter:label1" content="Written by"/>
        <meta name="twitter:data1" content="chrisbaines"/>
        <meta name="twitter:label2" content="Time to read"/>
        <meta name="twitter:data2" content="1 minute"/>
        <meta name="google-site-verification" content="googlec68b08cac5eb3edb"/>
      </Head>
      
      <Navbar/>
      <main className="flex-1">{children}</main>
      <Footer/>
    </div>
  );
}