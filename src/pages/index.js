import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"


const IndexPage = () => (
  <>
    <div className="hidden xl:block">
      <Layout>
        <Hero />
      </Layout>
    </div>
    <div className="block xl:hidden">
      <Hero />
    </div>
  </>

)

export default IndexPage
