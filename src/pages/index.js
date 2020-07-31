import React from "react"
import Layout from "../components/layout"
import Emoji from "../components/emoji"

export default function Home() {
  return (
    <Layout>
      <h1><Emoji symbol="👋" label="sheep"/> Hey!</h1>
      <p>
        I'm a London based Software Engineer, working at Kobalt. Most of my
        professional work has involved writing code in Scala and Java.
      </p>
    </Layout>
  )
}
