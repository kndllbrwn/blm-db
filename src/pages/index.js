import React from "react"
import Layout from "../components/Layout"
import DisplayNames from "../components/DisplayNames"

export default function Home() {
  return (
    <Layout>
      <h1 style={{textAlign: "center"}}>BLM Database</h1>
      <DisplayNames />
    </Layout>
  )
}
