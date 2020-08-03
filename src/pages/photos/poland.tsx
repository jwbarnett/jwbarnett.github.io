import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import PhotoLayout from "../../components/photo-layout"
import LandscapePhotoGroup from "../../components/landscape-photo-group"

interface Props {
  data: any
}

const Poland: FunctionComponent<Props> = ({ data }) => {
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
        <LandscapePhotoGroup photos={list}/>
      </div>
    </PhotoLayout>
  );
}

export default Poland;

export const query = graphql`
  query {
    japan: s3ImageAsset(Key: {eq: "photos/japan/miyajima.jpg"}) { ...titlePhotoFields }
  }
`