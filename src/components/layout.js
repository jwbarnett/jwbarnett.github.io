import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className="base">
      <Helmet>
        <meta charSet="utf-8" />
        <title>James Barnett</title>
      </Helmet>

      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
          <h3 style={{ display: `inline` }}>James Barnett</h3>
        </Link>

        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
        </ul>
      </header>
      
      {children}
    </div>
  )
}
