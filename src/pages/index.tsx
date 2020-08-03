import React, { FunctionComponent } from "react"
import Layout from "../components/layout"
import Emoji from "../components/emoji"

const Home: FunctionComponent = () => (
  <Layout>
    <h1><Emoji symbol="👋" label="wave"/> Hey!</h1>
    <p>
      I'm a London based Software Engineer, working at Kobalt. Most of my
      professional work has involved writing code in Scala and Java.
    </p>
  </Layout>
);

export default Home;
