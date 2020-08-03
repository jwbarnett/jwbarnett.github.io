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

  const introText = 
    "A three week holiday in Japan, basing ourselves in Tokyo and Osaka, and \
    taking various day trips to the other nearby cities";
  
  return(
    <PhotoLayout 
        titlePhoto={data.japan.childImageSharp.fluid}
        titleText="JAPAN"
        subtitleText="August 2018"
        introText={introText}>
      <div>
        <PhotoGroup photos={list}/>
      </div>
    </PhotoLayout>
  );
}

export const query = graphql`
  query {
    japan: s3ImageAsset(Key: {eq: "photos/japan/miyajima.jpg"}) { ...titlePhotoFields }
  }
`