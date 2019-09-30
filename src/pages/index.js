import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Banyanville</h1>
    <p>Banyanville newer content with CMS integrated</p>
  </Layout>
)

export default IndexPage
