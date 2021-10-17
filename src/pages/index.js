import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <div className="hidden lg:block">
      <Layout>
        <Seo title="Home" />
        <Hero />
      </Layout>
    </div>
    <div className="block lg:hidden">
      <Seo title="Home" />
      <Hero />
    </div>
  </>
)

export default IndexPage
