import React from "react"
import { Bio } from "../components/DataSection"
import Layout from "../components/layout"

const BioPage = () => {
  return (
    <Layout>
      <Seo title="Art & TRIP" />
      <Bio />
    </Layout>
  )
}

export default BioPage
