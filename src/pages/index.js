import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className="hidden lg:block">
      <Layout>
        <Hero />
      </Layout>
    </div>
    <div className="block lg:hidden">
      <Hero />
    </div>
  </>
)

export default IndexPage
