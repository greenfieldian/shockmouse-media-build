import * as React from "react"

import Layout from "../components/layout"
import Newsletter from "../components/newsletter"
import ContactForm from "../components/contactForm"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <ContactForm />
    <Newsletter />
  </Layout>
)

export default IndexPage
