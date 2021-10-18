import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Layout classCustom="hidden lg:block">
      <Seo title="Home" />
      <Hero />
    </Layout>
  </>
)

export default IndexPage
