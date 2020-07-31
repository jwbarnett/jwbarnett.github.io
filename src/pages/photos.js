import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Emoji from "../components/emoji"

export default ({ data }) => (
  <Layout>
    <div>
      <h1><Emoji symbol="📷" label="camera"/> Photos</h1>
      <ul>
        <li>We went to <Link to="/photos/new-york">New York</Link></li>
        <li>We went to <Link to="/photos/japan">Japan</Link></li>
        <li>We went to <Link to="/photos/poland">Poland</Link></li>
      </ul>
    </div>
  </Layout>
)
