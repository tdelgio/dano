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
    {/* <div className="block lg:hidden">
      <Hero />
    </div>
    <div className="hidden lg:block">
     
    </div> */}
  </>
)

export default IndexPage
