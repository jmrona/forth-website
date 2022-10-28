import React from "react"
import Header from "../components/Header/Header"
import styles from "../styles/Home.module.css"

export default function Home({testsList}) {
  console.log(testsList)
  
  return (
    <>
      <Header/>
    </>
  )
}

export async function getServerSideProps(context) {
  // const response = await fetch("https://api.forthwithlife.com/tests/all-tests",{method: "GET"})
  const response = await fetch("http://192.168.33.10/tests/all-tests",{method: "GET"})
  const test = await response.json();

  return {
    props: {
      testsList: test
    }, // will be passed to the page component as props
  }
}