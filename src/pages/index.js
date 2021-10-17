import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"

const IndexPage = () => (
  <>
    <div className="hidden lg:block">
      <Layout title="Home">
        <Hero />
      </Layout>
    </div>
    <div className="block lg:hidden">
      <Hero />
    </div>
  </>
)

export default IndexPage
