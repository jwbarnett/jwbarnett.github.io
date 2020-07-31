import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import TitleImage from "./title-image"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function PhotoLayout(props) {
  return (
    <div className="base--photo">
      <Helmet>
        <meta charSet="utf-8" />
        <title>James Barnett</title>
      </Helmet>

      <header style={{ marginBottom: `1rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
          <h3 style={{ display: `inline` }}>James Barnett</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`, margin: "0px 5px 0px 0px" }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/photos">Photos</ListLink>
        </ul>
      </header>

      <div style={{ width: "100%" }}>
        <TitleImage
            photo={props.titlePhoto}
            titleText={props.titleText}
            subtitleText={props.subtitleText}/>  
      </div>

      <section className="photo-intro-text">
        <span>{props.introText}</span>
      </section>

      {props.children}
    </div>
  )
}
