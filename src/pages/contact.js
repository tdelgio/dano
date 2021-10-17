import React from "react"
import { Form } from "../components/DataSection"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Form />
    </Layout>
  )
}

export default ContactPage
