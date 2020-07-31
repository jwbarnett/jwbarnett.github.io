import React from "react"
import { graphql } from "gatsby"
import PhotoLayout from "../../components/photo-layout"
import PhotoGroup from "../../components/photo-group"

export default ({ data }) => {
  const list = [
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid];

  const introText = "A holiday to Poland"
  
  return(
    <PhotoLayout 
        titlePhoto={data.japan.childImageSharp.fluid} 
        titleText="POLAND"
        subtitleText="August 2017"
        introText={introText}>
      <div>
        <PhotoGroup photos={list}/>
      </div>
    </PhotoLayout>
  );
}

export const query = graphql`
  query {
    japan: s3ImageAsset(Key: {eq: "photos/japan/miyajima.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid,
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`