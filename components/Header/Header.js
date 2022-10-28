import Image from "next/image";
import React from "react"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className="bg-[#f0e5e9] text-[#110d15] flex flex-wrap items-center justify-center pt-8 px-3">
      <div className="w-[100%] md:w-1/2 order-2 md:order-1 flex flex-col items-center justify-center">
        <h1 className="uppercase font-semibold text-center">Home Blood tests</h1>
        <h2 className="text-6xl font-bold text-center mb-4">Better Health starts here</h2>
        <p className="text-center font-light px-5">It"s time to start feeling your best with our range of home blood tests. Fast, accurate, scientific data will give you detailed insights into your health.</p>
        
        <button className="bg-[#5474e5] text-white px-7 py-2 rounded-lg mt-7 mb-2">View all tests</button> 
        
        <div className="flex w-9/12 justify-center align-center mx-auto py-5">
          <div className="text-[#726267] text-center border-r-[1px] border-[#72626760] px-2">
            <i className="fal fa-box-heart fa-fw fa-lg"></i>
            <p className="text-sm pt-2">Free delivery both ways</p>
          </div>
          <div className="text-[#726267] text-center border-r-[1px] border-[#72626760] px-2">
            <i className="fal fa-clock fa-fw fa-lg"></i>
            <p className="text-sm pt-2">Results in 2 working days</p>
          </div>
          <div className="text-[#726267] text-center px-2">
            <i className="fal fa-user-md fa-fw fa-lg"></i>
            <p className="text-sm pt-2">Personalised expert advice</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] md:w-1/2 order-1 md:order-2">
        <Image className="max-w-sm mx-auto" src="/img/girlHeader.webp" width={768} height={960} alt="Forth girl" />
      </div>

      <div className="w-[100%] bg-white order-3 rounded-2xl mb-10">
        <div className="flex flex-row flex-wrap px-10 py-6">
          <div className="w-1/2 flex flex-col">
            <h4 className="text-2xl font-bold mb-3">Why do a home blood test?</h4>
            <div className="flex items-center pb-2">
              <i className="fal fa-check fa-fw"></i>
              <p className="pl-3">Get fast access to testing and GP advice</p>
            </div>
            <div className="flex items-center pb-2">
              <i className="fal fa-check fa-fw"></i>
              <p className="pl-3">Get a greater understanding of your health</p>
            </div>
            <div className="flex items-center pb-2">
              <i className="fal fa-check fa-fw"></i>
              <p className="pl-3">Check areas of concern or monitor condition</p>
            </div>
            <div className="flex items-center pb-2">
              <i className="fal fa-check fa-fw"></i>
              <p className="pl-3">Identify areas that need improvement</p>
            </div>
          </div>
          <div className="w-1/2">
            <Image src="/img/MYFORM-AD.webp" className="max-h-[200px] w-auto rounded-xl ml-auto mr-0" width={498} height={194}/>
          </div>
        </div>
      </div>
    </div>
  );
}