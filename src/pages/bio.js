import React from "react"
import { Bio } from "../components/DataSection"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BioPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <Bio />
    </Layout>
  )
}

export default BioPage
