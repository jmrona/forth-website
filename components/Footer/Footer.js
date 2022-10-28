import Image from "next/image";
import React from "react"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer>
      <div className="min-h-[80px] bg-[#1b1b1b] flex items-center justify-center">
        <p className="mr-4">Get the app</p>
        <Image src="/img/appleStore.webp" height={44} width={132} alt="Download Forth app on App Store" className="mr-4" />
        <Image src="/img/playStore.webp" height={44} width={147} alt="Download Forth app on Google Play" className="mr-4"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10">
        <div className="w-50">
          <h4 className="text-center">Secure payments</h4>
        </div>
        <div className="w-50">
          <h4 className="text-center">Certified for quality & security</h4>
        </div>
        <div className="w-50">
          <h4 className="text-center">About Forth</h4>
        </div>
        <div className="w-50">
          <h4 className="text-center">Connect with us</h4>
        </div>
      </div>
      <div className="flex justify-center items-center py-10">
        <Image src="/img/brand/Forth-white-LOGO.svg" width={150} height={100} alt="Forth logo"/>
        <p className="pl-2 text-xs">Basepoint Business Centre <br/> Beaufort Park, Chepstow NP16 5UH</p>
      </div>
    </footer>
  );
}