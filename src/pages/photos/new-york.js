import React from "react"
import { graphql } from "gatsby"
import PhotoLayout from "../../components/photo-layout"
import PhotoGroup from "../../components/photo-group"

export default ({ data }) => {
  const list = [
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid];

  const introText = "We were invited to a wedding in New York towards the end of 2019";
  
  return(
    <PhotoLayout
        titlePhoto={data.centralPark.childImageSharp.fluid}
        titleText="NEW YORK"
        subtitleText="September 2019"
        introText={introText}>
      <div>
        <PhotoGroup photos={list}/>
      </div>
    </PhotoLayout>
  );
}

export const query = graphql`
  query {
    centralPark: s3ImageAsset(Key: {eq: "photos/new-york/central-park.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid,
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`